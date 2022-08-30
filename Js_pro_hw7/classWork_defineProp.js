/*
Завдання:

  Написати клас SuperDude, який як аргумент приймає два параметри:
    - Ім'я
    - Масив суперздібностей, які є об'єктом.

    Модель суперздатності:
      {
        // Ім'я здібності
        name:'Invisibility',
        // Повідомлення, яке буде виведено коли здатність була викликана
        spell: function(){ return `${this.name} hide from you`}
      }

    У конструкторі потрібно:
    - зробити так, щоб ім'я не можна було перезаписувати і привласнити йому те
      значення, яке ми передали як аргумент.

    - перебрати масив здібностей і на кожну з них створити метод для цього
      об'єкта, використовуючи поле name як назву методу, а spell як то,
      що потрібно повернути в console.log під час виклику цього методу.
    - всі здібності повинні бути незмінними

    - бонус, створити конструктор суперздатностей -> new Spell (name, spellFunc);
*/

class SuperDude {
  constructor(name, powers) {
    this.name = name;
    this.powers = powers;

    Object.defineProperty(this, 'name', {
      value: this.name,
      writable: false
    });

    this.powers.forEach(item => {
      Object.defineProperty(this, item.name, {
        value: () => console.log(item.spell()),
        writable: false
      })
    })
  }
}

let superPowers = [
  { name: 'Invisibility', spell: function () { return `${this.name} hide from you` } },
  { name: 'superSpeed', spell: function () { return `${this.name} running from you` } },
  { name: 'superSight', spell: function () { return `${this.name} see you` } },
  { name: 'superFroze', spell: function () { return `${this.name} will froze you` } },
  { name: 'superSkin', spell: function () { return `${this.name} skin is unbreakable` } },
];

let Luther = new SuperDude('Luther', superPowers);
// Тестування: Методи повинні працювати та виводити повідомлення.
Luther.superSight();
Luther.superSpeed();
Luther.superFroze();
Luther.Invisibility();
Luther.superSkin();

