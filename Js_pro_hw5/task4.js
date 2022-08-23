/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
function encryptCesar(number, word) {
  return word.split('').map(i => {
    if (i === i.toUpperCase()) {
      if (i.charCodeAt() + number > 'Z'.charCodeAt()) {
        return String.fromCharCode('A'.charCodeAt() + ((i.charCodeAt() + number) - 'Z'.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() + number);
      }
    } else {
      if (i.charCodeAt() + number > 'z'.charCodeAt()) {
        return String.fromCharCode('a'.charCodeAt() + ((i.charCodeAt() + number) - 'z'.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() + number);
      }
    }
  })
}

console.log(encryptCesar(2, 'Max'));
var encryptCesarBind = encryptCesar.bind(null, 5);
console.log(encryptCesarBind('VlaD'));

function decryptCesar(number, word) {
  return word.split('').map(i => {
    if (i === i.toUpperCase()) {
      if (i.charCodeAt() - number < 'A'.charCodeAt()) {
        return String.fromCharCode('Z'.charCodeAt() - (('A'.charCodeAt() + number) - i.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() - number);
      }
    } else {
      if (i.charCodeAt() - number < 'a'.charCodeAt()) {
        return String.fromCharCode('z'.charCodeAt() - (('a'.charCodeAt() + number) - i.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() - number);
      }
    }
  })
}

console.log(decryptCesar(3, 'Anatoliy'));
var decryptCesarBind2 = decryptCesar.bind(null,3);
console.log(decryptCesarBind2('Lesha'));