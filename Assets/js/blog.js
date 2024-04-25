const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', function(){
    window.location.href = 'index.html'
})

document.addEventListener('DOMContentLoaded', function(){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const blogContainer = document.querySelector('.blog-container');
    
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-container');
       postDiv.innerHTML=`
       <h3>${post.title}</h3>
       <hr />
       <div class="content">${post.content}</div>
       <p>Posted by: ${post.username}</p>
     `
     blogContainer.appendChild(postDiv);
    });
    
})