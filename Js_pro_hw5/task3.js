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
function Dog(name, breed, status) {
  this.name = name;
  this.breed = breed;
  this.status = status;

  this.changeStatus = function () {
    this.status = ' dog is ranning';
    console.log(`${this.name} is eating. It is ${this.breed}, it has status ${this.status}`);
  }

  this.showProps = function () {
    for (key in this) {
      console.log(key, this[key]);
      this[key] += 'result';
    }
  }
}

var result = new Dog('RedDog', 'ShepherdDog', 'lazy');
result.changeStatus();
console.log(result);