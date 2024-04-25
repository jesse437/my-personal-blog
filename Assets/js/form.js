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
  window.location.href = "blog.html"
});
