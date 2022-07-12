// Create a base URL
const BASE_URL = "/api/posts"


// We will turn this into an async function when we make the api call, because api calls are asyncronous
export function index() {
    return fetch(BASE_URL,{}).then((res) => res.json())
}

export function create(postData, id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(postData)
    }).then((res) => res.json())
}

export function update(postData, id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(postData)
    }).then((res) => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    }).then((res) => res.json())
}



