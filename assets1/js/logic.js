let listOfBlogs = [];
let formEl = document.getElementById("blogForm");


function toggleMode(){
    var body = document.body;
    var sun = document.getElementById('sun');
    var moon = document.getElementById('moon');

    if (body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
        sun.style.display = 'block';
        moon.style.display='none';
    }else{
        body.classList.add('dark-mode');
        sun.style.display = 'none'
        moon.style.display='block';
        body
    }
}


// formEl.addEventListener("submit", function (event) {
//     event.preventDefault();
//     window.location.href="blog.html"
// });
