/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

function Comment(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  if (avatarUrl) this.avatarUrl = avatarUrl;
  this.likes = 0;
}

Comment.prototype = {
  avatarUrl: 'https://18000.com.ua/wp-content/uploads/2020/08/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4.jpeg',
  addLike: function(){
    this.likes++;
  }
}

let comment1 = new Comment('First', 'first test comment goes here');
let comment2 = new Comment('Second', 'second test comment', './images/img1.jpg');
let comment3 = new Comment('Third', 'third test comment', './images/img2.jpg');
let comment4 = new Comment('Fourth', 'fourth test comment', './images/img3.jpg');

let comments = [comment1, comment2, comment3, comment4];

let commentsContainer = document.getElementById('CommentsContainer');

function Avatar(comments){
  this.comments = comments; 

  this.Render = function(){
    this.comments.forEach( comment => {
      let block = document.createElement('div');

      let title = document.createElement('h3');
      title.innerText = comment.name;
      block.appendChild(title);

      let description = document.createElement('p');
      description.innerText = comment.text;
      block.appendChild(description); 

      let avatar = document.createElement('img');
      avatar.src = comment.avatarUrl;
      block.appendChild(avatar);

      commentsContainer.appendChild(block);      
    })
  }

  this.Render();
}

let avatars = new Avatar(comments);


