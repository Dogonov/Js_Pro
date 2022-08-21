/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
let Colors = {
  background: 'purple',
  color: 'white'
}

found = (color) => {
  document.body.color = color;
  document.body.background = this.background;
}

found.call(Colors, "bleak");

foundSecond = () => {
  document.body.color = this.color;
  document.body.background = this.background;
}

let funcBind = foundSecond.bind(Colors);
funcBind();

function myCall(text) {
  document.body.style.background = this.background;
  document.body.style.color = this.color;

  var h1 = document.createElement("h1");
  h1.innerText = text;
  document.querySelector("body").appendChild(h1);
}

myCall.apply(Colors, ["Text!"]);

  // fucntion myCall( color ){
  //   document.body.style.background = this.background;
  //   document.body.style.color = color;
  // }
  // myCall.call( colors, 'red' );
