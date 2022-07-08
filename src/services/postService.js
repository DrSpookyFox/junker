// Create a base URL
const BASE_URL = "/api/posts"


// We will turn this into an async function when we make the api call, because api calls are asyncronous
export function index() {
    return fetch(BASE_URL,{}).then((res) => res.json())
}


export function create(postData) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(postData)
    }).then((res) => res.json())
}

