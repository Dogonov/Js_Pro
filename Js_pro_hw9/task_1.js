/*

    Завдання 1:
     Написати скрипт, який на кліку на кнопку рандоміт колір і записує його в localStorage
     Після перезавантаження сторінки, колір повинен зберегтися.

*/
let btnRandom = document.querySelector("#randomBtn");

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return "#" + getRandom(0, 255).toString(16) + getRandom(0, 255).toString(16) + getRandom(0, 255).toString(16);
}

function setBtnColor(color) {
    btnRandom.style.backgroundColor = color;
}

btnRandom.addEventListener("click", (e) => {
    localStorage.setItem("color", getRandomColor());
    setBtnColor(localStorage.getItem("color"));
})

setBtnColor(localStorage.getItem("color"));