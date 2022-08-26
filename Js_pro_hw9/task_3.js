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

*/let firstPost = new postMessage()