var db;
const DB_NAME = "sblog";
// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// // 
if (!window.indexedDB) {
  console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");

}
export const openConnection = () => {
  const request = window.indexedDB.open(DB_NAME, 1);
  request.onerror = function (err) {
    console.log("DB open error", err.errorCode);
  };
  request.onupgradeneeded = function (evt) {
    db = evt.target.result;
    let articleStore = db.createObjectStore("articles", { keyPath: "id" });
    articleStore.createIndex("slug", "slug", { unique: false });
    articleStore.createIndex("tags", "tags", { unique: false });

    db.createObjectStore("tags", { keyPath: "id" });//creates objectstore for tags
    db.createObjectStore("categories", { keyPath: "id" });//creates object store for categories

    let userObject = db.createObjectStore("users", { keyPath: "id", autoIncrement:true });
    userObject.createIndex('sync','sync', {unique: false })
   
  };
  return request;
};



// const clearObjectStore = (store) => {
//   var storeObject = getObjectStore(store, 'readwrite');
//   var req = store.clear();
//   req.onsuccess = function (evt) {
//     displayActionSuccess("Store cleared");
//     displayPubList(storeObject);
//   };
//   req.onerror = function (evt) {
//     console.error("clearObjectStore:", evt.target.errorCode);
//     displayActionFailure(this.error);
//   };
// }

/**
* @param {IDBObjectStore=} store
* @returns Cursor
*/
export const displayPubList = (object) => {
  return new Promise(function (resolve, reject) {
    
    var obj_list = [];
    openConnection().onsuccess = function (evt) {
      db = evt.target.result;

      var transaction = db.transaction(object, "readonly");
      var obj_store = transaction.objectStore(object);

      obj_store.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        
        if (cursor) {
          // console.log(cursor.value);
          obj_list.push(cursor.value);
          cursor.continue();
        } else {
          // console.log("Done processing " + object + "...");
          resolve(obj_list);
        }
      };
    }
  });
}
/**
* @param {string} biblioid
* @param {string} title
* @param {number} year
* @param {Blob=} blob
*/
export const addData = (storeName, data) => {
  openConnection().onsuccess = function (evt) {
    db = evt.target.result;
    let tx = db.transaction(storeName, 'readwrite');
    let store = tx.objectStore(storeName);
    let req;
    try {
      req = store.add(data);
    } catch (e) {
      if (e.name === 'DataCloneError')
        displayActionFailure("This engine doesn't know how to clone a Blob, " +
          "use Firefox");
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      displayActionSuccess();
      //   displayPubList(store);
    };
    req.onerror = function () {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }
}

export const clearStore = (storeName) => {
  openConnection().onsuccess = function (evt) {
    db = evt.target.result;
    let tx = db.transaction(storeName, 'readwrite');
    let store = tx.objectStore(storeName).clear();
    store.onsuccess = function (evt) {
      console.log("store opened in DB successful");
      displayActionSuccess('');
      //   displayPubList(store);
    };
    let req;
    try {
      req = store.clear();
      req.onsuccess = function (evt) {
        console.log("Deleted in DB successful");
        displayActionSuccess('');
        //   displayPubList(store);
      };
      req.onerror = function () {
        console.error("addPublication error", this.error);
        displayActionFailure(this.error);
      };
    } catch (e) {
      if (e.name === 'DataCloneError')
        displayActionFailure("This engine doesn't know how to clone a Blob, " +
          "use Firefox");
      throw e;
    }
    
  }
}
export const deleteITem = (storeName, key) => {
  openConnection().onsuccess = function (evt) {
    db = evt.target.result;
    let tx = db.transaction(storeName, 'readwrite');
    let store = tx.objectStore(storeName);
    let req;
    try {
      req = store.delete(key);
    } catch (e) {
      if (e.name === 'DataCloneError')
        displayActionFailure("This engine doesn't know how to clone a Blob, " +
          "use Firefox");
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Deleted in DB successful");
      displayActionSuccess('Item Deleted from store');
      //   displayPubList(store);
    };
    req.onerror = function () {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }
}

function displayActionSuccess(msg) {
  msg = typeof msg != 'undefined' ? "Success: " + msg : "Success";
  console.log(msg)
  // $('#msg').html('<span class="action-success">' + msg + '</span>');
}
function displayActionFailure(msg) {
  msg = typeof msg != 'undefined' ? "Failure: " + msg : "Failure";
  // $('#msg').html('<span class="action-failure">' + msg + '</span>');
}
    

// } else {

// }