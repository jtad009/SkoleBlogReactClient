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
        'GET_ARTICLE_BY_ID': 'http://localhost/api/v1/articles/view/',
        'FETCH_CATEGORIES': 'http://localhost/skole/blog/api/v1/categories/all.json',
        'FETCH_TAGS': 'http://localhost/skole/blog/api/v1/tags/all.json',
        'FETCH_ARTICLE_BY_TAGID': 'http://localhost/skole/blog/api/v1/tags/view/',
        'FETCH_ARTICLE_BY_CATEGORYID':'http://localhost/skole/blog/api/v1/categories/view/',
    },
    production:{
        'HOMEPAGE':'https://blog.skole.com.ng',
        'FETCH_ARTICLES': 'https://skole.com.ng/blog/api/v1/articles/all.json',
        'GET_ARTICLE_BY_ID': 'https://skole.com.ng/blog/api/v1/articles/view/',
        'FETCH_CATEGORIES': 'https://skole.com.ng/blog/api/v1/categories/all.json',
        'FETCH_TAGS': 'https://skole.com.ng/blog/api/v1/tags/all.json',
        'FETCH_ARTICLE_BY_TAGID': 'https://skole.com.ng/blog/api/v1/tags/view/',
        'FETCH_ARTICLE_BY_CATEGORYID':'https://skole.com.ng/blog/api/v1/categories/view/',
    }
};
export function getArticleById(id) {
    return fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.GET_ARTICLE_BY_ID + id: 
    API_ENDPOINTS.production.GET_ARTICLE_BY_ID + id, {
        crossDomain: true,
        headers: header

    }). then((response) => {

        return response.json();
    });
}

export async function loadArticlesByTagID(id) {
    const response = fetch(window.location.host.includes('localhost') ? 
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

export async function loadArticles() {
    const response = fetch(window.location.host.includes('localhost') ? 
    API_ENDPOINTS.dev.FETCH_ARTICLES : 
    API_ENDPOINTS.production.FETCH_ARTICLES, {
        crossDomain: true,
        headers: header

    })
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



