//edit posts function

async function editFormHandler(event) {
  event.preventDefault();

  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
}
//Post Title & Post Text

const title = document.querySelector('input[name="post-title"]').value;
const post_container = document.querySelector(
  'textarea[name="post-container"]'
).value;

// use the route to update the post

const response = await fetch(`/api/posts/${postId}`, {
  method: "PUT",
  body: JSON.stringify({
    title,
    post_container,
  }),
  headers: { "Content-Type": "application/json" },
});
// If the post edited successfully display in dashboard
// If not display error message

if (response.ok) {
  document.location.replace("/dashboard");

  //display an error
} else {
  alert(response.statusText);
}

//function to delete post

async function deleteClickHandler(event) {
  event.preventDefault();

  //get post id from url
  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").lenght - 1
  ];
  
document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
