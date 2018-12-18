//Variables
const postsArea = document.getElementById("posts");
const title = document.getElementById("blog-title");
const content = document.getElementById("blog-content");
const btn = document.getElementById("btn");

let posts = [];
// Create post
btn.addEventListener("click", function appendToList() {
  let post = {
    title: title.value,
    content: content.value
  };
  posts.push(post);
  // Print post
  console.log(posts);
  return posts;
});
createNode(posts);

function createNode(posts) {
  for (let post of posts) {
    // console.log(post);
    // Create div element
    let newPost = document.createElement("div");
    newPost.setAttribute("class", "card col-12 my-3");
    // Create div element
    let postBody = document.createElement("div");
    postBody.setAttribute("class", "card-body");
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
    postTitle.innerHTML = post.title;
    // Add date to postSubtitle element
    postSubtitle.innerHTML = new Date();
    // Get value from title field and add to postContent element
    postContent.innerHTML = post.content;

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
}