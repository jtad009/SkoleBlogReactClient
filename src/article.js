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
        'GET_ARTICLE_BY_ID': 'http://localhost:80/api/v1/articles/view/',
    },
    production:{
        'FETCH_ARTICLES': 'https://skole.com.ng/blog/api/v1/articles/all.json',
        'GET_ARTICLE_BY_ID': 'https://lskole.com.ng/blog/api/v1/articles/view/',
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
export const articles = [
    {
        id: "06aba281-18b1-46db-93bd-d222cf2ad718",
        title: "nc5TX",
        category_id: 2,
        article: "The School. A social institution where knowledge is transferred, lives are impacted, positively for the betterment of the society. An institution, that is home to key characters. Student or Pupil, Teacher or Tutor, however you refer to them, they are the significant elements and compositions that make up the school. Although, there may be a missing role or character, society has ignored to devise the epic combo required for The School to constantly thrive invariably.",
        "slug": "nc5TX",
        "view_count": 1,
        "user_id": 1,
        "cover_image": "Skole-8c07f.jpg",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:25:01",
        "updated_at": "2019-08-17 17:25:01",
        "categories": {
            "id": 2,
            "category": "pARETNAL GUADIANCE",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Tessters",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "06aba281-18b1-46db-93bd-d222cf2ad718",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:25:02",
                    "updated_at": "2019-08-17 17:25:02"
                }
            }
        ]
    },
    {
        "id": "0cf404b1-776d-4058-9548-5492d1a7950a",
        "title": "B3G7Y",
        "category_id": 1,
        "article": "ZEnFUPzV5pajR35zmaL0",
        "slug": "B3G7Y",
        "view_count": 1,
        "user_id": 1,
        "cover_image": "5d583614c1897-test.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:15:00",
        "updated_at": "2019-08-17 17:15:00",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "0cf404b1-776d-4058-9548-5492d1a7950a",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:15:00",
                    "updated_at": "2019-08-17 17:15:00"
                }
            }
        ]
    },
    {
        "id": "14299c95-cb58-4e32-91e2-5b4ea5d3e904",
        "title": "fLorr",
        "category_id": 1,
        "article": "p6cK7WankBKPBlw7UKnM",
        "slug": "fLorr",
        "view_count": 1,
        "user_id": 1,
        "cover_image": "5d58380d66e50-test.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:23:25",
        "updated_at": "2019-08-17 17:23:25",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "14299c95-cb58-4e32-91e2-5b4ea5d3e904",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:23:25",
                    "updated_at": "2019-08-17 17:23:25"
                }
            }
        ]
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
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "1f4cf1e5-8e1f-4a49-9301-36a385575be3",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:26:04",
                    "updated_at": "2019-08-17 17:26:04"
                }
            }
        ]
    },
    {
        "id": "275238ae-5af5-45dd-a887-4e75ea29b37f",
        "title": "New Article",
        "category_id": 1,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584ef7a41ef-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 19:01:11",
        "updated_at": "2019-08-17 19:01:11",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    },
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
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
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
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "290fc048-bf15-11e9-bb04-f0761cc3045a",
                    "tag_id": 1,
                    "created_at": "2019-08-16 16:09:34",
                    "updated_at": "2019-08-16 16:09:34"
                }
            },
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "290fc048-bf15-11e9-bb04-f0761cc3045a",
                    "tag_id": 1,
                    "created_at": "2019-08-16 16:09:34",
                    "updated_at": "2019-08-16 16:09:34"
                }
            }
        ]
    },
    {
        "id": "40643b7b-4026-4a7f-ae7e-88e714f5aa40",
        "title": "New Article",
        "category_id": 1,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584e1804d8a-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 18:57:28",
        "updated_at": "2019-08-17 18:57:28",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    },
    {
        "id": "4ee8bcf2-1fa5-4d6a-9692-360358415fb9",
        "title": "New Article",
        "category_id": 1,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584e7229915-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 18:58:58",
        "updated_at": "2019-08-17 18:58:58",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    },
    {
        "id": "6e7fcdee-f1df-4d5c-880c-be25aa3c91a2",
        "title": "New Article",
        "category_id": 1,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584e45cfc80-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 18:58:13",
        "updated_at": "2019-08-17 18:58:13",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    },
    {
        "id": "71a46df7-08dd-4ab5-a037-1494038815ce",
        "title": "tYGTx",
        "category_id": 1,
        "article": "WziBW65y7LJYxgwkbynA",
        "slug": "tYGTx",
        "view_count": 1,
        "user_id": 1,
        "cover_image": "5d5837de4a65f-test.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:22:38",
        "updated_at": "2019-08-17 17:22:38",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "71a46df7-08dd-4ab5-a037-1494038815ce",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:22:38",
                    "updated_at": "2019-08-17 17:22:38"
                }
            }
        ]
    },
    {
        "id": "93f69471-e3e5-4877-9e61-e471df6a5b7a",
        "title": "New Article",
        "category_id": 1,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584e65102e1-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 18:58:45",
        "updated_at": "2019-08-17 18:58:45",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    },
    {
        "id": "d9fcea07-c32c-48e9-bb56-1c19651ccef6",
        "title": "Helpp me sir",
        "category_id": 1,
        "article": "Zv7uGUge1BOBtXChrTG2",
        "slug": "Helpp-me-sir",
        "view_count": 0,
        "user_id": 1,
        "cover_image": "5d5838acb4d1a-test.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:10:07",
        "updated_at": "2019-08-17 17:26:04",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "d9fcea07-c32c-48e9-bb56-1c19651ccef6",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:10:08",
                    "updated_at": "2019-08-17 17:10:08"
                }
            }
        ]
    },
    {
        "id": "dbfdfa95-4b34-4ca7-b1e5-e176d3af3c1f",
        "title": "New Article",
        "category_id": 1,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584e80a99a6-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 18:59:12",
        "updated_at": "2019-08-17 18:59:12",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    },
    {
        "id": "e372c67d-03d4-4849-8673-0dc8f00bf9a3",
        "title": "Hl934",
        "category_id": 1,
        "article": "DfdSNGpTnxnmIYbIEshZ",
        "slug": "Hl934",
        "view_count": 1,
        "user_id": 1,
        "cover_image": "5d5837ee71b65-test.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:22:54",
        "updated_at": "2019-08-17 17:22:54",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "e372c67d-03d4-4849-8673-0dc8f00bf9a3",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:22:54",
                    "updated_at": "2019-08-17 17:22:54"
                }
            }
        ]
    },
    {
        "id": "f01b7b23-fca7-453d-a2e5-31dc4e654b4f",
        "title": "rBjUi",
        "category_id": 1,
        "article": "ypMjKqXOLnpYj1EfKMyS",
        "slug": "rBjUi",
        "view_count": 1,
        "user_id": 1,
        "cover_image": "5d58383e7c325-test.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 17:24:14",
        "updated_at": "2019-08-17 17:24:14",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": {
            "id": 1,
            "username": "",
            "first_name": "Keith Hoeger MD",
            "last_name": "Eveline Hyatt",
            "article_count": 1,
            "bio": "aNEnyGJ6gy94W6AduyxXqkivdOoHUlcVXX3MZWy5B8NYtmwy6fuKdf5Xf5wU",
            "canWrite": 0,
            "image": "ehNO00d8PC.png",
            "email": "nschinner@ziemann.com",
            "created_at": "2019-08-16 16:15:14",
            "updated_at": "2019-08-16 16:15:14"
        },
        "comments": [],
        "tags": [
            {
                "id": 1,
                "tag": "Reyna Waelchi",
                "created_at": "2019-08-16 16:09:34",
                "updated_at": "2019-08-16 16:09:34",
                "pivot": {
                    "article_id": "f01b7b23-fca7-453d-a2e5-31dc4e654b4f",
                    "tag_id": 1,
                    "created_at": "2019-08-17 17:24:14",
                    "updated_at": "2019-08-17 17:24:14"
                }
            }
        ]
    },
    {
        "id": "f84b83b6-7f98-485a-bd96-fde73ba1cb9c",
        "title": "New Article",
        "category_id": 2,
        "article": "Shalom is ass",
        "slug": "New-Article",
        "view_count": 1,
        "user_id": 4,
        "cover_image": "5d584e9ae2df6-israel.png",
        "comment_count": "0",
        "published": 1,
        "created_at": "2019-08-17 18:59:38",
        "updated_at": "2019-08-17 18:59:38",
        "categories": {
            "id": 1,
            "category": "Tessters",
            "article_count": 0,
            "created_at": "2019-08-16 16:09:34",
            "updated_at": "2019-08-18 06:30:34"
        },
        "users": null,
        "comments": [],
        "tags": []
    }
];

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
export const categories = [
    {
        "id": 1,
        "category": "Tessters",
        "article_count": 0,
        "created_at": "2019-08-16 16:09:34",
        "updated_at": "2019-08-18 06:30:34"
    },
    {
        "id": 2,
        "category": "Parental Guadiances",
        "article_count": 0,
        "created_at": "2019-08-17 17:39:00",
        "updated_at": "2019-08-17 17:39:00"
    },
    {
        "id": 26,
        "category": "umxox",
        "article_count": 0,
        "created_at": "2019-08-17 19:01:34",
        "updated_at": "2019-08-17 19:01:34"
    },
    {
        "id": 27,
        "category": "JVcmJ",
        "article_count": 0,
        "created_at": "2019-08-17 19:02:11",
        "updated_at": "2019-08-17 19:02:11"
    },
    {
        "id": 28,
        "category": "ykqAC",
        "article_count": 0,
        "created_at": "2019-08-17 19:02:44",
        "updated_at": "2019-08-17 19:02:44"
    },
    {
        "id": 29,
        "category": "9Fu5X",
        "article_count": 0,
        "created_at": "2019-08-18 06:15:08",
        "updated_at": "2019-08-18 06:15:08"
    },
    {
        "id": 30,
        "category": "GCmqk",
        "article_count": 0,
        "created_at": "2019-08-18 06:17:38",
        "updated_at": "2019-08-18 06:17:38"
    },
    {
        "id": 31,
        "category": "q32aF",
        "article_count": 0,
        "created_at": "2019-08-18 06:29:06",
        "updated_at": "2019-08-18 06:29:06"
    },
    {
        "id": 32,
        "category": "L5LXc",
        "article_count": 0,
        "created_at": "2019-08-18 06:29:45",
        "updated_at": "2019-08-18 06:29:45"
    },
    {
        "id": 33,
        "category": "m1alY",
        "article_count": 0,
        "created_at": "2019-08-18 06:30:34",
        "updated_at": "2019-08-18 06:30:34"
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