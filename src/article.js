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
        'FETCH_ARTICLES': 'http://localhost/skole/blog/api/v1/articles/all.json',
        'GET_ARTICLE_BY_ID': 'http://localhost/api/v1/articles/view/',
        'FETCH_CATEGORIES': 'http://localhost/skole/blog/api/v1/categories/all.json',
        'FETCH_TAGS': 'http://localhost/skole/blog/api/v1/tags/all.json',
    },
    production:{
        'FETCH_ARTICLES': 'https://skole.com.ng/blog/api/v1/articles/all.json',
        'GET_ARTICLE_BY_ID': 'https://skole.com.ng/blog/api/v1/articles/view/',
        'FETCH_CATEGORIES': 'https://skole.com.ng/blog/api/v1/categories/all.json',
        'FETCH_TAGS': 'https://skole.com.ng/blog/api/v1/tags/all.json',
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

export const tags = [
    {
        "id": 1,
        "tag": "Reyna Waelchi",
        "created_at": "2019-08-16 16:09:34",
        "updated_at": "2019-08-16 16:09:34"
    },
    {
        "id": 2,
        "tag": "Tessters",
        "created_at": "2019-08-17 18:32:33",
        "updated_at": "2019-08-17 18:53:10"
    },
    {
        "id": 3,
        "tag": "NODQj",
        "created_at": "2019-08-17 18:53:10",
        "updated_at": "2019-08-17 18:53:10"
    },
    {
        "id": 4,
        "tag": "xtnpe",
        "created_at": "2019-08-17 19:01:35",
        "updated_at": "2019-08-17 19:01:35"
    },
    {
        "id": 5,
        "tag": "wdYbq",
        "created_at": "2019-08-17 19:02:12",
        "updated_at": "2019-08-17 19:02:12"
    },
    {
        "id": 6,
        "tag": "xGQEN",
        "created_at": "2019-08-17 19:02:45",
        "updated_at": "2019-08-17 19:02:45"
    },
    {
        "id": 7,
        "tag": "x8rPf",
        "created_at": "2019-08-18 06:15:10",
        "updated_at": "2019-08-18 06:15:10"
    },
    {
        "id": 8,
        "tag": "L3o4P",
        "created_at": "2019-08-18 06:17:39",
        "updated_at": "2019-08-18 06:17:39"
    },
    {
        "id": 9,
        "tag": "F2SHt",
        "created_at": "2019-08-18 06:29:07",
        "updated_at": "2019-08-18 06:29:07"
    },
    {
        "id": 10,
        "tag": "4yQFz",
        "created_at": "2019-08-18 06:29:46",
        "updated_at": "2019-08-18 06:29:46"
    },
    {
        "id": 11,
        "tag": "gAtKq",
        "created_at": "2019-08-18 06:30:35",
        "updated_at": "2019-08-18 06:30:35"
    }
];

export const tagIDWithArticles = [
    {
        "id": 2,
        "tag": "Tessters",
        "created_at": "2019-08-17 18:32:33",
        "updated_at": "2019-08-17 18:53:10",
        "articles": [
            {
                "id": "290fc048-bf15-11e9-bb04-f0761cc3045a",
                "title": "Ross Rolfson IV",
                "category_id": 1,
                "article": "kGNBba2hQ3qTyVvFvLacSmduXi1NcK4WYynL8RIkCimdB8muyUOXMRhSIYZF2j5wUxdwA3zbz943ttwqUQvCeTMwzegTxktf3Rsk5zK454dhxEtjbD6OLBfPw0J5dMXC2v7C2FewaChmMwilVlOXL1BCJJeP8AF4jq6MUCz6Ti9YMpOrXyFEdGJ4vlmxFVtdLDkebPiC",
                "slug": "Tony Bergstrom",
                "view_count": 1,
                "user_id": 1,
                "cover_image": "hy70vRelmy.png",
                "comment_count": "1",
                "published": 0,
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "tag_id": 2,
                    "article_id": "290fc048-bf15-11e9-bb04-f0761cc3045a",
                    "created_at": "2019-08-16 16:09:34",
                    "updated_at": "2019-08-16 16:09:34"
                },
                "comments": [
                    {
                        "id": 1,
                        "article_id": "290fc048-bf15-11e9-bb04-f0761cc3045a",
                        "comment": "Dr. Brennan Gleason",
                        "published": 0,
                        "name": "Dr. Lorine Russel Jr.",
                        "email": "alana30@yahoo.com",
                        "website": "skole.com.ng",
                        "created_at": "2019-08-16 16:09:34",
                        "updated_at": "2019-08-16 16:09:34"
                    },
                    {
                        "id": 2,
                        "article_id": "290fc048-bf15-11e9-bb04-f0761cc3045a",
                        "comment": "Marielle Frami",
                        "published": 0,
                        "name": "Antonette Lehner",
                        "email": "luis.metz@harris.com",
                        "website": "skole.com.ng",
                        "created_at": "2019-08-16 16:09:34",
                        "updated_at": "2019-08-16 16:09:34"
                    }
                ],
                "categories": {
                    "id": 1,
                    "category": "Tessters",
                    "article_count": 0,
                    "created_at": "2019-08-16 16:09:34",
                    "updated_at": "2019-08-18 06:30:34"
                }
            },
            {
                "id": "1f4cf1e5-8e1f-4a49-9301-36a385575be3",
                "title": "9G8xS",
                "category_id": 1,
                "article": "FZEnInz5MOOVJxlxcNWa",
                "slug": "9G8xS",
                "view_count": 1,
                "user_id": 1,
                "cover_image": "5d5838ac6c292-test.png",
                "comment_count": "0",
                "published": 1,
                "created_at": "2019-08-17 17:26:04",
                "updated_at": "2019-08-17 17:26:04",
                "pivot": {
                    "tag_id": 1,
                    "article_id": "1f4cf1e5-8e1f-4a49-9301-36a385575be3",
                    "created_at": "2019-08-17 17:26:04",
                    "updated_at": "2019-08-17 17:26:04"
                },
                "comments": [],
                "categories": {
                    "id": 1,
                    "category": "Tessters",
                    "article_count": 0,
                    "created_at": "2019-08-16 16:09:34",
                    "updated_at": "2019-08-18 06:30:34"
                }
            }
        ]
    }
];
export const filterByCategory = [
    {
        "id": 2,
        "category": "Parental Guadiances",
        "article_count": 0,
        "created_at": "2019-08-17 17:39:00",
        "updated_at": "2019-08-17 17:39:00",
        articles: [
            {
                "id": "06aba281-18b1-46db-93bd-d222cf2ad718",
                "title": "nc5TX",
                "category_id": 2,
                "article": "U9AsrheEkDkVx12uwusL",
                "slug": "nc5TX",
                "view_count": 1,
                "user_id": 1,
                "cover_image": "5d58386df13f9-test.png",
                "comment_count": "0",
                "published": 1,
                "created_at": "2019-08-17 17:25:01",
                "updated_at": "2019-08-17 17:25:01",
                "tags": [
                    {
                        "id": 1,
                        "tag": "Reyna Waelchi",
                        "created_at": "2019-08-16 16:09:34",
                        "updated_at": "2019-08-16 16:09:34",
                        "pivot": {
                            "article_id": "06aba281-18b1-46db-93bd-d222cf2ad718",
                            "tag_id": 1,
                            "created_at": "2019-08-17 17:25:02",
                            "updated_at": "2019-08-17 17:25:02"
                        }
                    }
                ],
                "comments": [],
                "categories": {
                    "id": 2,
                    "category": "Parental Guadiances",
                    "article_count": 0,
                    "created_at": "2019-08-17 17:39:00",
                    "updated_at": "2019-08-17 17:39:00"
                }
            }
        ]
    }
];