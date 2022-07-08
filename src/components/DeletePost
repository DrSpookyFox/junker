
//function to delete post

async function deleteClickHandler(event) {
  event.preventDefault();

  //get post id from url
  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").lenght - 1
  ];
  //using async function to delete the post

  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  //If post deleted successfully display dashboard
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}


document
  .querySelector(".delete-post-button")
  .addEventListener("click", deleteClickHandler);
