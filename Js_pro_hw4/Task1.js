

/*

    Документація:
    
    https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
    
    form.checkValidity() > Перевірка всіх полів форми на валідність
    form.reportValidity() > Перевіряє всі поля на валідність та виводить повідомлення з помилкою

    formElement.validity > Об"єкт із параметрами валідності поля
    formElement.setCustomValidity(message) > Метод, який задасть validity.valid = false, і при спробі відправки
        повідомлення виведе message у браузерний потрапив

    Класи для стилізації стану елемента
    input:valid{} // hover
    input:invalid{} // firstchild

    
    Завдання:
    
    Використовуючи браузерне API для валідації форм, реалізувати валідацію наступної форми:

    - Ім"я користувача: type:text -> validation: required; minlength = 2;
        Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"
    - Email: type: email -> validation: required; minlength = 3; validEmail;
        Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"
    - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
        Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";
    - Кількість з"їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
        Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
    - Дякуємо за яблука: type: text -> validation: required;
        Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();

    - згоден на навчання: type: checkbox -> validation: required;
        Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"

    Внизу дві кнопки:

    1) Звичайний submit який відправить форму, якщо вона валідна.
    2) Кнопка Validate(Перевірити) яка запускає методи:
        - yourForm.checkValidity: та виводить на сторінку повідомлення з результатом перевірки
        - yourForm.reportValidity: викликає перевірку всіх правил та виведення повідомлення з помилкою, якщо така є

*/
var mainForm = document.getElementById("mainForm");
var submitBtn = document.getElementById("submitBtn");
var validateBtn = document.getElementById("validateBtn");

const cleanMessage = () => {
    var arrOfInputs = Array.from(mainForm.elements);
    arrOfInputs.forEach(item => {
        item.setCustomValidity("");
    })
}

submitBtn.addEventListener("click", (e) => {
    cleanMessage();

    if (mainForm.userName.value.length === 0) {
        mainForm.userName.setCustomValidity("Як тебе звуть друже?!");
    }

    if (!mainForm.userEmail.validity.valid) {
        mainForm.userEmail.setCustomValidity("Ну й дарма, не отримаєш бандероль із яблуками!");
    }

    if (!mainForm.userPassword.validity.valid) {
        mainForm.userPassword.setCustomValidity("Я нікому не скажу наш секрет");
    }

    if (!mainForm.apple.validity.valid) {
        mainForm.apple.setCustomValidity("Ну хоч поїж трохи... Яблука смачні");
    }

    if (mainForm.blockThanks.value !== "дякую") {
        mainForm.blockThanks.setCustomValidity("Фу, невдячний(-а)!");
    }

    if (!mainForm.agreeToStudy.validity.valid) {
        mainForm.agreeToStudy.setCustomValidity("Неосвічені живуть довше! Добре подумай!");
    }
})

mainForm.validateBtn.addEventListener("click", () => {
    if (!mainForm.checkValidity()) {
        alert("Error");
    } else {
        alert("Ok");
    }

    mainForm.reportValidity();
});