/*
  Завдання:
   Копіювати текст із файлу RegExp.txt на сайт https://regexr.com/
   Написати регулярний вираз, який знайде:
     1. Усі слова.
     2. Усі збіги букв від a до e,
     3. Року, наприклад 2004
     4. Слова загорнуті в [квадратні Кавички]
     5. Усі формати файлів .jpg / .png / .gif
     6. Усі email com.ua
     7. Всі слова написані з великої літери
     8. Знайти телефон написаний за патерном +00 (000) 000-00-00,
        де замість 0 може бути будь-яке число
*/
var text = `
Lorem ae ipsum is a [pseudo] Latin [] texte eused in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder repeat (or filler) text. It's a convenient tool for http://facebook.com mock-ups vasya@gmail.com. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author gray and color colour philosopher Cicero. Its words and he varters 2006 have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, grey correct, or comprehensible Latin anymore. While lorem ipsum's [still] resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the varters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are andrew@itea.ua digraphs not to be found in the original.

In a 2007 professional context it often happens that private
or corporate clients corder a publication .jpg  to be made and presented with the .gzip actual petya@ukr.net content still not being ready.
Think of a news .gif blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted
by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, 0001 disregarding the layout and its elements. Besides, random text risks to be uni
ntendedly humorous or [offensive], an unacceptable risk in corporate environments. .mp3 Lorem ipsum and its many variants have been http://google.com.ua employed since the early 1960 ies, and quite likely since the sixteenth century.
`;
console.log(text);

console.log('task 1');
var task1 = /([A-Za-z])\w+/g;
console.log(text.match(task1));

console.log('task 2');
var task2 = /([a-e])\w+/g;
console.log(text.match(task2));

console.log('task 3');
var task3 = /\b([0-9]{4})\b/g;
console.log(text.match(task3));

console.log('task 4');
var task4 = /\[\w+\]/g;
console.log(text.match(task4));

console.log('task 5');
var task5 = /\B\.\w{3}\b/g;
console.log(text.match(task5));

console.log('task 6');
var task6 = /(\w+)@(\w+)\.(com.ua)/g;
console.log(text.match(task6));

console.log('task 7');
var task7 = /[A-Z]\w+/g;
console.log(text.match(task7));

console.log('task 8');
var task8 = /(\+\d{2})\s(\(\d{3}\))\s(\d{3})-(\d{2})-(\d{2})/g;
console.log(text.match(task8));