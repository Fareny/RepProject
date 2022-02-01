let rollback = 50;
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)');
let screenPrice = prompt('Сколько будет стоить данная работа? (рублей)');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить? (рублей)');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить? (рублей)');
let fullPrice = parseInt(screenPrice) + parseInt(servicePrice2) + parseInt(servicePrice2);
let servicePercentPrice = fullPrice - rollback;

rollback = fullPrice * (rollback / 100);

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice <= 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}

console.log(adaptive);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLowerCase().split(", "));
console.log('процент отката посреднику за работу - ' + rollback + ' рублей');
console.log(Math.ceil(servicePercentPrice));