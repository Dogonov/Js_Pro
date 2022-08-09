
/*

Завдання 1.

  Написати скрипт, який буде перемикати вкладки по натисканню
  на кнопки у хедері.

  Головна умова – змінювати файл HTML не можна.

  Алгоритм:
    1. Вибрати кожну кнопку у шапці
       + бонус вибрати одним селектором

    2. Повісити кнопку онклік
        button1.onclick = function(event) {

        }
        + бонус: один обробник на всі три кнопки

    3. Написати функцію, яка вибирає відповідну вкладку
       та додає до неї клас active

    4. Написати функцію hideAllTabs яка ховає всі вкладки.
       Видаляючи клас active з усіх вкладок

  Методи роботи:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/

var buttons = document.querySelectorAll(".showButton");
console.log(buttons);
var ArrButtons = Array.from(document.querySelectorAll(".tab"));
console.(ArrButtons);
buttons.onclick = function (e) {
  console.log(buttons);
  e.target.classList.add("active");
  getСomparison(e.target.dataset.tab);
  hideAllTabs();
}

// buttons.forEach(btn => {
//   btn.addEventListener('click', function (e) {
//     buttons.forEach(function (btn) {
//       btn.classList.remove('active-btn');
//     })
//     e.target.classList.add('active-btn');
//     hideAllTabs();
//     getTabByDataTab(e.target.dataset.tab).classList.add('active');
//   })
// })

function getСomparison(tabId) {
  return ArrButtons.find(function(tab) {
    return tab.dataset.tab == tabId
  })
}

function hideAllTabs(){
  ArrButtons.forEach(function(tab){
    tab.classList.remove('active');
  })
}