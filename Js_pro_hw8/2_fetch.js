/*
Завдання:

  1. За допомогою fetch отримати дані:
     https://jsonplaceholder.typicode.com/users

  2. Отриману відповідь перетворити на json викликавши метод .json з об'єкта відповіді
  3. Вибрати випадкову людину і передати до наступного чейну промісу
  4. Зробити додатковий запит на отримання списку постів людини
     https://jsonplaceholder.typicode.com/posts
     І далі передати об'єкт:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Підказка потрібно викликати додатковий fecth з поточного чейну.
     Для того щоб передати результат виконання дод. запиту
     у наш перший проміс використовуйте констуркцію:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формуєте об'єкт у якому будуть дані людини з
                 першого запиту, наприклад, його name response1.name
                 та друзі які прийшли з дод. запиту
              }
            )
        }
      )

    5. Вивести результат на сторінку

   + Бонус. Для конвертації об'єкта response в json використовувати одну
     функцію.

*/


// fetch(url)
//   .then(testFunc)
//   .then(test2Func)
//   .then( res => {
//      return fetch()
//       .then( friendsResponse)
//       .then()
//   })
//   .then( func)

fetch('https://jsonplaceholder.typicode.com/users')
  .then(testFunc => testFunc.json())
  .then(testFunc => {
    return testFunc[Math.floor(Math.random() * testFunc.length)];
  })
  .then(testFunc => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(test2Func => test2Func.json())
      .then(test2Func => {
        let obj = {};
        obj.name = testFunc.name;
        obj.posts = test2Func.filter(x => x.userId === testFunc.id);

        console.log(obj);
      })
  });
