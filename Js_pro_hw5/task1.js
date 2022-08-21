/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
var Train = {
name: "train1",
speed: 300,
passengers: 100,

go: () => {
    console.log(`Поезд ${Train.name} везет ${Train.passengers} со скоростью ${Train.speed}`);
},

stop: () => {
    Train.speed = 0;
    console.log(`Поезд ${Train.name} остановился. Скорость ${Train.speed}`)
},

pickUp: () => {
    Train.passengers++;
    console.log(Train.passengers);
}
}

Train.go();
Train.stop();
Train.pickUp();

