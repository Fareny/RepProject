let rollback = 50;
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)');
let screenPrice = +prompt('Сколько будет стоить данная работа? (рублей)');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить? (рублей)');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить? (рублей)');
let fullPrice;
let servicePercentPrice;
let allServicePrices;


const getAllServicePrices = function (service1, service2) {
    allServicePrices = service1 + service2;
};
getAllServicePrices(servicePrice1, servicePrice2);


function getFullPrice(screen, allService) {
    fullPrice = screen + allService;
}
getFullPrice(screenPrice, allServicePrices);


const getTitle = function (getTitle) {
    let title1 = getTitle.trim().charAt(0).toUpperCase();
    let title2 = getTitle.trim().substring(1, getTitle.length).toLowerCase();
    title = title1 + title2;
};
getTitle(title);


const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (price >= 15000 && price <= 30000) {
        return 'Даем скидку в 5%';
    } else if (price <= 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};
servicePercentPrice = getServicePercentPrices();

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');