const form = document.getElementById("blogForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.querySelector('input[name="username"]').value;
  const title = document.querySelector('input[name="title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;
  if (!username || !title || !content) {
    alert("Please complete all fields!");
    return;
  }

  const blogPost = { username, title, content };
  const existingPost = JSON.parse(localStorage.getItem("posts")) || [];
  existingPost.push(blogPost);
  localStorage.setItem("posts", JSON.stringify(existingPost));
  console.log("Data loaded");
  window.location.href = "blog.html";
});

document.addEventListener("DOMContentLoaded", function () {
  var formContainer = document.querySelector(".form-container");

  // Here I change the width of the form-container
  formContainer.style.width = "500px";
});

// let existingPost;
// if (JSON.parse(localStorage.getItem("posts"))) {
//   existingPost = JSON.parse(localStorage.getItem("posts"));
// } else {
//   existingPost = [];
// }

// localStorage.setItem("Keynumber", 5);
// let favorite = localStorage.getItem("Keynumber");

// let list = [1, 2, 3];

// //console.log(list[1]);

// //localStorage.setItem("list-number", JSON.stringify(list));

// //let numbersList = JSON.parse(localStorage.getItem("list-number"))
// console.log(numbersList);
// console.log(numbersList[2]);
