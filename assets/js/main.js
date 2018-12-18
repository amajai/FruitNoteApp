// Assigning variables
let postsArea = document.getElementById("posts");
let title = document.getElementById("blog-title");
let content = document.getElementById("blog-content");

function mybtn() {
  if (title.value == "" || content.value == "") {
    alert("Please type something!");
    return;
  }
  // Create div element
  let deleteBtnArea = document.createElement("div");
  deleteBtnArea.setAttribute("class", "container-fluid d-flex justify-content-end");
  // Create span element
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn badge btn-danger rounded-circle btnDel");
  deleteBtn.setAttribute("title", "Delete");
 
  // Create div element
  let newPost = document.createElement("div");
  newPost.setAttribute("class", "card col-12 my-3");
  // Create div element
  let postBody = document.createElement("div");
  postBody.setAttribute("class", "card-body mb-3");
  // Create h4 element
  let postTitle = document.createElement("h4");
  postTitle.setAttribute("class", "card-title");
  // Create h6 element
  let postSubtitle = document.createElement("h6");
  postSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
  // Create p element
  let postContent = document.createElement("p");
  postContent.setAttribute("class", "card-text");

  // Get value from title field and add to postTitle element
  postTitle.innerHTML = title.value;
  // Add date to postSubtitle element
  postSubtitle.innerHTML = new Date();
  // Get value from title field and add to postContent element
  postContent.innerHTML = content.value;
  // Delete btn
  deleteBtn.innerHTML = "X";

  deleteBtnArea.appendChild(deleteBtn);
  postBody.appendChild(deleteBtnArea);
  // Append to postBody element
  postBody.appendChild(postTitle);
  // Append to postBody element
  postBody.appendChild(postSubtitle);
  // Append to postBody element
  postBody.appendChild(postContent);
  // Append to newPost element
  newPost.appendChild(postBody);

  // Prepend to postsArea
  postsArea.prepend(newPost);

  title.value = "";
  content.value = "";
}

function btnRefresh() {
  console.log("hhhh");
}