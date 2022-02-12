const title = document.getElementsByTagName('h1')[0];

const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];

const buttonPlus = document.querySelector('.screen-btn');

const selector = document.querySelectorAll('.other-items');

const otherItemsNumber = document.querySelectorAll('.other-items.number');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');

const range = document.querySelector('.rollback input');
const spanValue = document.querySelector('.rollback .range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

const screens = document.querySelectorAll('.screen');

const appData = {
    count: 0,
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicesPercent: {},
    servicesNumber: {},
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,

    init: function () {

        appData.addTitle();
        buttonStart.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        range.addEventListener('input', appData.rangeEvent);
        range.addEventListener('change', appData.showRange);
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    addScreens: function () {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.checkedPrice(input, selectName);

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const lable = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[lable.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const lable = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[lable.textContent] = +input.value;
            }
        });
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalCountRollback.value = appData.servicePercentPrice;
        fullTotalCount.value = appData.fullPrice;
        totalCount.value = appData.count;
    },

    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
        console.log(appData);
        appData.logger();
    },

    addPrices: function () {
        let totalPrice = appData.screens.reduce((acc, product) => {
            return +product.price + acc;
        }, 0);
        appData.screenPrice = totalPrice;

        appData.count = appData.screens.reduce((acc, screen) => acc + screen.count, 0);

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
        // debugger;
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    checkedPrice: function (input, selectName) {
        if (input.value == 0 || input == '' || selectName == 'Тип экранов') {
            alert('Не корректно написано количество экранов или не выбран тип');
            document.getElementById("Button").disabled = true;
        }
    },
    rangeEvent(event) {
        appData.rollback = event.target.value;
        spanValue.textContent = appData.rollback + '%';
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.count);
    },
};
appData.init();


