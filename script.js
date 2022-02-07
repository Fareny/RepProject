const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    services: {},
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },

    checkingString: function (str) {
        return typeof str === "string" || str instanceof String;
    },

    asking: function () {
        // appData.title = prompt('Как называется ваш проект?', 'КаЛькУлЯтОр');
        do {
            appData.title = prompt('Как называется ваш проект?', 'КаЛькУлЯтОр');
        } while (appData.isNumber(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;
            do {
                name = prompt('Какие типы экранов нужно разработать?', 'Простые');
            } while (appData.isNumber(name));

            do {
                price = prompt('Сколько будет стоить данная работа? (рублей)', '1000');
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
            } while (appData.isNumber(name));

            do {
                price = prompt('Сколько это будет стоить? (рублей)');
            } while (!appData.isNumber(price));

            appData.services.name = +price;

        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },

    addPrices: function () {
        let totalPrice = appData.screens.reduce((acc, product) => {
            return +product.price + acc;
        }, 0);
        appData.screenPrice = totalPrice;

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
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
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getFullPrice: function () {
        appData.fullPrice = parseInt(appData.screenPrice) + parseInt(appData.allServicePrices);
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.services);
    },
};
appData.start();
