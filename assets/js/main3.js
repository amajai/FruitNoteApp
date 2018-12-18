// Assigning variables
const postsArea = document.getElementById("posts");
const titleInput = document.getElementById("blog-title");
const contentInput = document.getElementById("blog-content");

// Test
let storedNotes = [{ title: "This is how you", content: "Move with the flow of time!!" }];
for (let note of storedNotes) {
  let noteItem = createNewNote(note.title, note.content);
  // Prepend to postsArea
  postsArea.prepend(noteItem);
  bindEvents(noteItem)
}
localStorage.setItem("notes", )
// Example 1
let visitTimes = {times: 0};
if (JSON.parse(localStorage.getItem("key")).times){
  visitTimes = JSON.parse(localStorage.getItem("key"));
};
visitTimes.times ++;
const numberHolder = document.getElementById("number");
numberHolder.innerHTML = visitTimes.times;
localStorage.setItem("key", JSON.stringify(visitTimes));
const reset = document.getElementById("reset");
reset.onclick = resetCounter;

function resetCounter() {
  let a = JSON.parse(localStorage.getItem("key"));
  a.times = 0;
  localStorage.setItem("key", JSON.stringify(a));
  numberHolder.innerHTML = 0;
}
function noteObject(title, content) {
  
}
//New note item
function createNewNote(title, content) {

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
  postTitle.innerHTML = title;
  // Add date to postSubtitle element
  postSubtitle.innerHTML = new Date();
  // Get value from title field and add to postContent element
  postContent.innerHTML = content;
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

  return newPost;
}

function addNote() {
  if (titleInput.value == "" || contentInput.value == "") {
    alert("Please type something!");
    return;
  }
  console.log("Adding new note..");
  // Create new note item with text from title and content field
  let noteItem = createNewNote(titleInput.value, contentInput.value);
  // Prepend to postsArea
  postsArea.prepend(noteItem);
  bindEvents(noteItem);

  titleInput.value = "";
  contentInput.value = "";
}

function bindEvents(noteItem) {
  let deleteBtn = noteItem.querySelector("button.btnDel");
  // bind delete Note to deleteBtn
  deleteBtn.onclick = deleteNote;
};

function deleteNote() {
  console.log("Delete note..");
  // Refer to the whole card
  let noteItem = this.offsetParent;
  noteItem.remove();
}
// Adds event to all available notes

// let notes = postsArea.children;
// for (let note of notes) {
//   bindEvents(note);
// }


