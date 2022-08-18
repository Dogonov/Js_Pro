/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/


function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.status = "Біжить";
  this.dogRun = function () {
    console.log("Собака " + this.name + " " + this.status + ".");
  };
  this.dogEat = function () {
    this.status = "Їсть";
    console.log("Собака " + this.name + " " + this.status + ".");
  };
  this.showProps = function () {
    let self = this;
    for (var key in self) {
      if (typeof self[key] == "function") {
        continue;
      }
      console.log("obj." + key + " = " + self[key]);
    }
  }
}

var myDog = new Dog ("Чарлі", "Вівчарка");
console.log(myDog);

