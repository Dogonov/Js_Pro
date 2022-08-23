/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: "",
      text: "",
      avatarUrl: "...jpg"
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
  avatarUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
  addLike: function () {
    this.likes++;
  }
}

var myComment1 = new Comment("1", "test 1");
var myComment2 = new Comment("2", "test 2");
var myComment3 = new Comment("3", "test 3", "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=");
var myComment4 = new Comment("4", "test 4", "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg");

var CommentsArray = [myComment1, myComment2, myComment3, myComment4];

var commentsContainer = document.getElementById("Comments");

function Avatar(comments) {
  this.comments = comments;

  this.Create = function () {
    this.comments.forEach(comment => {
      var form = document.createElement("div");

      var title = document.createElement("h2");
      title.innerText = comment.name;
      form.appendChild(title);

      var text = document.createElement("p");
      text.innerText = comment.text;
      form.appendChild(text);

      var avatar = document.createElement("img");
      avatar.src = comment.avatarUrl;
      form.appendChild(avatar);

      var likes = document.createElement("div");
      var likesImg = document.createElement("img");
      likesImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYSJsCJKn1C_xz56tmFrtA5l4A-cnl5XNa_j787k&s";
      likes.className = "like";
      likes.innerText = comment.likes;
      form.appendChild(likesImg);
      form.appendChild(likes);

      likesImg.addEventListener("click", function () {
        comment.addLike();
        form.querySelector(".like").innerHTML = comment.likes;
      })

      commentsContainer.appendChild(form);
    })
  }

  this.Create();
}

var avatars = new Avatar(CommentsArray);