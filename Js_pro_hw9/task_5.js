// взяти todolist з попередніх домівок та реалізувати збереження всіх записів на "сервер" використовуючи https://www.npmjs.com/package/json-server або базу firebase, що розглядали на уроці
// при перезавантаженні сторінки всі збережені записи повинні підтягуватися і малюватись, при додаванні запису вона відлітає на "серевер" і зберігається

window.addEventListener("load", function () {
    var toDoInput = document.getElementById("newToDo");
    var butnAddToDo = document.getElementById("AddToDo");
    var toDoList = document.getElementById("toDoList");

    butnAddToDo.addEventListener("click", () => {
        var itemText = toDoInput.value;
        var listItem = document.createElement("li");
        listItem.innerHTML = `
          <input type="checkbox" class="DoneCheckbox" />
            <span class="TodoText">${itemText}</span>
          <button>Remove</button> `;
        var checkBox = listItem.querySelector("input");
        var removeBtn = listItem.querySelector("button");

        checkBox.addEventListener("input", () => {
            listItem.querySelector(".TodoText").classList.toggle("done");
        });

        removeBtn.addEventListener("click", () => {
            listItem.remove();
        })

        toDoList.appendChild(listItem);

        fetch("https://js-hw-48bc0-default-rtdb.firebaseio.com/test.json", {
            method: "POST",
            body: JSON.stringify(itemText)
        })
    })
});