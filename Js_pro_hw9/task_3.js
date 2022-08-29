/*

    Завдання 3:

     Написати форму з 2 полями для title та about
     при сабміті форми повинен створюватися пост на основі класу Post
     <form>
         <input type="text" name="title">
         <textarea name="about"></textarea>
         <button>Send</button>
     </form>

     Написати клас Post у якому є дані:

     _id
     title,
     body,
     likes

     У класу повинен бути метод addLike та render.

     Потрібно зробити так щоб:
     - Після додавання поста дані про нього записуються в localStorage.
     - Після перезавантаження сторінки дані повинні зберегтися.
     - Можна було завантажити дані до класу з апі: https://jsonplaceholder.typicode.com/posts

*/

var postForm = document.querySelector("#postForm");
var postContainer = document.querySelector("#postContainer");
var loadPostsBtn = postForm.querySelector("._loadPostsBtn");
var posts = [];

class Post {
    constructor(title, body, likes, id) {
        this.id = id ? id : new Date();
        this.title = title;
        this.body = body;
        this.likes = likes ? likes : 0;

        this.addLike = this.addLike.bind(this);
        this.render();
    }

    addLike() {
        this.likes++;

        const like = document.querySelector(`[data-id="${this.id}"] .count`);
        like.innerHTML = this.likes;

        posts.forEach(post => {
            if (post.id === this.id) {
                post.likes = this.likes;
            }
        });

        localStorage.setItem("posts", JSON.stringify(posts));
    };

    render() {
        let block = document.createElement("div");
        block.dataset.id = this.id;
        block.classList.add("post");

        let context = `                            
                <h3>Title: ${this.title}</h3>
                <p>${this.body}</p>
                <span class="like">
                    <img src="./like.png">
                </span>                
                <i>likes: <span class="count">${this.likes}</span></i>            
            `;
        block.innerHTML = context;

        let likeBtn = block.querySelector(".like");
        likeBtn.addEventListener("click", this.addLike);

        postContainer.prepend(block);
    };
}

async function fetchPost() {
    let respone = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await respone.json();

    let currentPosts = GetSavedPosts();

    if (currentPosts !== null) {
        var uniquePosts = json.filter(function (obj) {
            return !currentPosts.some(function (obj2) {
                return obj.id == obj2.id;
            });
        });

        uniquePosts.forEach(post => {
            var post = new Post(post.title, post.body, 0, post.id);
            posts.push(post);
        });
    } else {
        json.forEach(post => {
            var post = new Post(post.title, post.body, 0, post.id);
            posts.push(post);
        })
    }

    localStorage.setItem("posts", JSON.stringify(posts));
}

const GetSavedPosts = () => {
    let data = localStorage.getItem("posts");

    if (data !== null) {
        posts = JSON.parse(data);
        return posts;
    }

    return null;
}

postForm.addEventListener("submit", e => {
    e.preventDefault();
    var post = new Post(postForm.title.value, postForm.about.value);
    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));

    postForm.reset();
});

loadPostsBtn.addEventListener("click", fetchPost);

var postsLS = GetSavedPosts();

if (postsLS !== null) {
    postsLS.forEach(function (post) {
        new Post(post.title, post.body, post.likes, post.id);
    })
}
