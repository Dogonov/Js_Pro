/*

    Завдання 2:
     Написати форму логіну (логін пароль), яка після відправки даних записує їх у localStorage.
     Якщо в localStorage є запис - На сторінці вивести "Привіт {username}", якщо ні - вивести вікно
     логіна.

     + бонус, зробити кнопку "вийти" яка видаляє запис із localStorage і знову показує форму логіна
     + бонус зробити перевірку логіну та пароля на конкретний запис. Тобто. залогінить користувача якщо
     він введе тільки admin@example.com та пароль 12345678


*/

document.addEventListener("DOMContentLoaded", () => {
    var form = document.querySelector("#form");
    var btnExit = document.querySelector("#btnExit");

    btnExit.addEventListener("click", () => {
        localStorage.clear();
    })

    if (localStorage.getItem("userName")) {
        form.classList.add("hidden");
        var userNameLogin = localStorage.getItem("userName")
        alert(`Hello ${userNameLogin}`);
        return;
    } else {
        form.classList.remove("hidden")
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var userName = form.userName.value;
        var userPassword = form.userPassword.value;

        if (userName !== "admin@example.com" || userPassword !== "12345678") {
            alert("Error");
            return;
        }

        localStorage.setItem("userName", form.userName.value);
        localStorage.setItem("userPassword", form.userPassword.value);
    })


});