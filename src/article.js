import axios from 'axios';
const header = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Requested-With',
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:3000',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    // 'Access-Control-Request-Method': 'GET',
    'Access-Control-Request-Headers': 'access-control-allow-credentials,access-control-allow-headers,access-control-allow-origin,cache-control,content-type,pragma'
});
export const API_ENDPOINTS={
    dev:{
        'HOMEPAGE':'http://localhost:3000',
        'FETCH_ARTICLES': 'http://localhost/skole/blog/api/v1/articles/all.json',
        'GET_ARTICLE_BY_SLUG': 'http://localhost/skole/blog/api/v1/articles/view/',
        'FETCH_CATEGORIES': 'http://localhost/skole/blog/api/v1/categories/all.json',
        'FETCH_TAGS': 'http://localhost/skole/blog/api/v1/tags/all.json',
        'FETCH_ARTICLE_BY_TAGID': 'http://localhost/skole/blog/api/v1/tags/view/',
        'FETCH_ARTICLE_BY_CATEGORYID':'http://localhost/skole/blog/api/v1/categories/view/',
        'ADD_ARTICLE':'http://localhost/skole/blog/api/v1/articles/add.json',
        'FIND_TAG':'http://localhost/skole/blog/api/v1/tags/find/',
        'ADD_TAG':'http://localhost/skole/blog/api/v1/tags/add.json',
        'FETCH_AUTHOR':'http://localhost/skole/blog/api/v1/authors/login.json'
    },
    production:{
        'HOMEPAGE':'https://blog.skole.com.ng',
        'FETCH_ARTICLES': 'https://skole.com.ng/blog/api/v1/articles/all.json',
        'GET_ARTICLE_BY_SLUG': 'https://skole.com.ng/blog/api/v1/articles/view/',
        'FETCH_CATEGORIES': 'https://skole.com.ng/blog/api/v1/categories/all.json',
        'FETCH_TAGS': 'https://skole.com.ng/blog/api/v1/tags/all.json',
        'FETCH_ARTICLE_BY_TAGID': 'https://skole.com.ng/blog/api/v1/tags/view/',
        'FETCH_ARTICLE_BY_CATEGORYID':'https://skole.com.ng/blog/api/v1/categories/view/',
        'ADD_ARTICLE':'https://skole.com.ng/blog/api/v1/articles/add.json',
        'FIND_TAG':'https://skole.com.ng/blog/api/v1/tags/find/',
        'ADD_TAG':'https://skole.com.ng/blog/api/v1/tags/add.json',
        'FETCH_AUTHOR':'https://skole.com.ng/blog/api/v1/authors/login.json'
    }
};
/**
 * Get a sharable link for the article
 * @param {String} slug 
 */
export function getArticleSlugLink(slug){
    return window.location.host.includes('localhost') ?
    API_ENDPOINTS.dev.GET_ARTICLE_BY_ID + slug +'.json':
    API_ENDPOINTS.production.GET_ARTICLE_BY_ID + slug +'.json'
}
export async function getArticleById(slug) {
    const response = await fetch(window.location.host.includes('localhost') ?
        API_ENDPOINTS.dev.GET_ARTICLE_BY_SLUG + slug +'.json':
        API_ENDPOINTS.production.GET_ARTICLE_BY_SLUG + slug +'.json', {
        crossDomain: true,
        headers: header
    });
    return await response;
}

export async function loadArticlesByTagID(id) {
    const response = await fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FETCH_ARTICLE_BY_TAGID+id+'.json' : 
    API_ENDPOINTS.production.FETCH_ARTICLE_BY_TAGID+id+'.json', {
        crossDomain: true,
        headers: header

    })
    return await response;
}
export async function loadArticlesByCategoryID(id) {
    const response = fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FETCH_ARTICLE_BY_CATEGORYID+id+'.json' : 
    API_ENDPOINTS.production.FETCH_ARTICLE_BY_CATEGORYID+id+'.json', {
        crossDomain: true,
        headers: header

    })
    return await response;
}
/**
 * Fetches Articles data from the API
 * @returns  a promise
 */
export async function loadArticles(page = 0) {
    var response;
    if(page === 0){
         response = fetch(window.location.host.includes('localhost') ? 
        API_ENDPOINTS.dev.FETCH_ARTICLES : 
        API_ENDPOINTS.production.FETCH_ARTICLES, {
            crossDomain: true,
            headers: header
    
        })
    }else{
         response = fetch(window.location.host.includes('localhost') ? 
        API_ENDPOINTS.dev.FETCH_ARTICLES+"?page="+page : 
        API_ENDPOINTS.production.FETCH_ARTICLES+"?page="+page, {
            crossDomain: true,
            headers: header
    
        })
    }
   
    return await response;
}
export async function loadCategories() {
    const response = fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FETCH_CATEGORIES : 
    API_ENDPOINTS.production.FETCH_CATEGORIES, {
        crossDomain: true,
        headers: header

    })
    return await response;
}
export async function loadTags() {
    const response = fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FETCH_TAGS : 
    API_ENDPOINTS.production.FETCH_TAGS, {
        crossDomain: true,
        headers: header

    })
    return await response;
}
export async function fetchAuthor(username,password) {
    header.append('Authorization', 'Basic '+btoa(username+':'+password));
    const response = fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FETCH_AUTHOR : 
    API_ENDPOINTS.production.FETCH_AUTHOR, {
        crossDomain: true,
        headers: header

    });
    header.delete('Authorization');
    return await response;
}
export async function findTags(username, tags) {
    header.append('Authorization', 'Basic '+username);
    const response = fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FIND_TAG+tags+'.json' : 
    API_ENDPOINTS.production.FIND_TAG+tags+'.json', {
        crossDomain: true,
        headers: header

    });
    header.delete('Authorization');
    return await response;
}
/**
 * Adds new tag 
 * @param username
 * @param password
 * @param tag
 * @return a Promise
 */
export async function addTags(pk, tag) {
    
    return axios({
        method: 'post', //you can set what request you want to be
        url: window.location.host.includes('localhost') ?
        API_ENDPOINTS.dev.ADD_TAG : API_ENDPOINTS.production.ADD_TAG,
        data: {'tag':tag},
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Requested-With',
            'Content-Type': 'application/json',
            
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic '+pk,
            
        }
      });
    
    // return await response;
}

export async function postData(pk, data) {

    
    // Default options are marked with *
    header.append('Authorization', 'Basic '+pk);
    
     axios({
        method: 'post', //you can set what request you want to be
        url: window.location.host.includes('localhost') ?
        API_ENDPOINTS.dev.ADD_ARTICLE : API_ENDPOINTS.production.ADD_ARTICLE,
        data: data,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Requested-With',
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic '+pk,
            'Access-Control-Request-Headers': 'access-control-allow-credentials,access-control-allow-headers,access-control-allow-origin,cache-control,content-type,pragma'
        }
      }).then(res => {
          console.log(res)
      })
    // const response = await fetch(window.location.host.includes('localhost') ?
    // API_ENDPOINTS.dev.ADD_ARTICLE : API_ENDPOINTS.production.ADD_ARTICLE, {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: header,
    //   redirect: 'follow', // manual, *follow, error
    //   referrer: 'no-referrer', // no-referrer, *client
    //   body: data // body data type must match "Content-Type" header
    // });
    header.delete('Authorization');
    // return await response.json(); // parses JSON response into native JavaScript objects
  }



