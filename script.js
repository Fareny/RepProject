let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 50;
let service1;
let service2;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
};


const asking = function () {
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа? (рублей)');
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
};


const getAllServicePrices = function () {
    let sum = 0;
    let res = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        do {
            res = prompt('Сколько это будет стоить? (рублей)');
        } while (!isNumber(res));
        sum += +res;
    }
    return sum;
};

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
};

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

function getFullPrice() {
    return parseInt(screenPrice) + allServicePrices;
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log();
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
