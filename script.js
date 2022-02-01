let rollback = 50;
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)');
let screenPrice = prompt('Сколько будет стоить данная работа? (рублей)');
parseInt(screenPrice);
let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = prompt('Сколько это будет стоить? (рублей)'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = prompt('Сколько это будет стоить? (рублей)');
let fullPrice = parseInt(screenPrice) + parseInt(servicePrice2) + parseInt(servicePrice2);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLowerCase().split(", "));
rollback = fullPrice * (rollback / 100);
console.log('процент отката посреднику за работу - ' + rollback + ' рублей');

let servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice <= 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}


