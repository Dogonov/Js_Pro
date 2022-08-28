/*

Завдання:

     Написати за допомогою async-await скрипт, який:

     Отримує список користувачів: https://jsonplaceholder.typicode.com/users
     Перебирає, виводить табличку:

     # | userName | email | Показати webiste | Показати телефон |
     1. | userName | email@test.com | button | button
     2. | userName | email@test.com | 20/10/2019 | button
     3. | userName | email@test.com | button | button
     4. | userName | email@test.com | button | button

     Дані про сайт та номер телефону приховувати під час виведення та показувати під час кліку.

*/
async function getData() {
     var result = await fetch('https://jsonplaceholder.typicode.com/users');
     var data = await result.json();
     return data;
}

async function foundTable() {
     const data = await getData();
     new Table(document.querySelector('body'), data);
}

foundTable();

class Table {
     constructor(el, data) {
          this.el = el;
          this.data = data;
          this.Build();
     }

     Build() {
          this.el.appendChild(this.BuildHeader());
          this.el.appendChild(this.BuildBody());
     }

     BuildHeader() {
          var tableHead = document.createElement('thead');
          tableHead.innerHTML = `
             <tr>
                 <th>#</th>
                 <th>user name</th>
                 <th>email</th>
                 <th>Показать webiste</th>
                 <th>Показать phone</th>
             </tr>
         `;
          return tableHead;
     }

     BuildBody() {
          var tableBody = document.createElement('tbody');

          this.data.forEach((item, i) => {
               var bodyRow = document.createElement('tr');
               bodyRow.innerHTML = `
                 <td>${i}</td>
                 <td>${item.username}</td>
                 <td>${item.email}</td>
                 <td>
                     <button class="_btnWebsite">show</button>
                     <span class="hide">${item.website}</span>
                 </td>
                 <td>
                     <button class="_btnEmail">show</button>
                     <span class="hide">${item.phone}</span>
                 </td>
             `;

               bodyRow.querySelector('._btnWebsite').addEventListener('click', (e) => {
                    e.target.classList.toggle('show');
               });

               bodyRow.querySelector('._btnEmail').addEventListener('click', (e) => {
                    e.target.classList.toggle('show');
               });

               tableBody.appendChild(bodyRow);
          });

          return tableBody;
     }
}        