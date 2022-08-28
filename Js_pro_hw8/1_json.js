
/*
  Завдання:
   Написати скрипт який:
     1. Збирає дані з форми (3 різних полів), конвертує їх у json та виводить у консоль.
   -> 2. Зробити окремий інпут, який виконує JSON.parse(); на той рядок, що ви туди ввели і виводить результат у консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'
*/

document.addEventListener("DOMContentLoaded", () => {
  var form = document.querySelector("#form");
  var convertJSON = document.querySelector("#convertJSON");

  convertJSON.addEventListener("click", (e) => {
    e.preventDefault();
    var obj = {};
    var arrInfo = Array.from(form.elements).filter(x => x.name !== "");
    arrInfo.forEach(item => (obj[item.name] = item.value));
    console.log(JSON.stringify(obj));
  });

  var formResult = document.querySelector("#formResult");
  var btnParseJSON = document.querySelector("#parseJSON");

  btnParseJSON.addEventListener("click", (e) => {
    e.preventDefault();
    var result = JSON.parse(formResult.name.value)
    console.log(result);
  })
});
