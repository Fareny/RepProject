//Восстановил порядок книг.
let book1 = document.querySelectorAll('.book');
book1[0].before(book1[1]);
book1[0].after(book1[4]);
book1[5].after(book1[2]);
//Заменил картинку заднего фона на другую из папки image
let image = document.querySelector('body');
image.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Исправил заголовок в книге 3
let book3 = document.querySelectorAll('a');
book3[2].textContent = 'Книга 3. this и Прототипы Объектов';

//Удалил рекламу со страницы
let removeMarketing = document.querySelectorAll('.adv');
removeMarketing[0].remove(removeMarketing[0]);

//Восстановил порядок глав во второй и пятой книге
let books = document.querySelectorAll('li');

books[9].after(books[12]);
books[12].after(books[14]);
books[16].before(books[8]);


books[37].after(books[45]);
books[40].after(books[38]);
books[44].before(books[41]);

let chapter8 = document.createElement('li');
// chapter8.textContent = 'Глава 8: За пределами ES6';
// chapter8.classList.add('li');
// book1[2].append(chapter8);
books[55].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
console.log(books);