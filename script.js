
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    service1: '',
    service2: '',
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function () {
        for (let key in appData) {
            console.log('Ключ ' + key + ' значение ' + appData[key]);
        }
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'КаЛькУлЯтОр');
        appData.screens = prompt('Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)', 'Простые');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа? (рублей)', '1000');
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },

    getAllServicePrices: function () {
        let sum = 0;
        let res = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
            }
            do {
                res = prompt('Сколько это будет стоить? (рублей)');
            } while (!appData.isNumber(res));
            sum += +res;
        }
        return sum;
    },

    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (price >= 15000 && price <= 30000) {
            return 'Даем скидку в 5%';
        } else if (price <= 15000 && price >= 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getFullPrice: function () {
        return parseInt(appData.screenPrice) + parseInt(appData.allServicePrices);
    }

};
appData.start();
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);