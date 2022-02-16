const title = document.getElementsByTagName('h1')[0];

const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementById('reset');

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

let rangeInput = document.querySelector('.main-controls__range input');

let disable = document.querySelectorAll('.main-controls__views:first-child .main-controls__item');

let elements = document.querySelectorAll('.main-controls__views.element:nth-child(2) .main-controls__item .main-controls__checkbox .custom-checkbox');
const cms = document.getElementById('cms-open');

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
        buttonStart.addEventListener('click', this.preStart);
        buttonReset.addEventListener('click', this.clear);
        buttonPlus.addEventListener('click', this.addScreenBlock);
        range.addEventListener('input', this.rangeEvent);
        range.addEventListener('change', this.showRange);
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    addScreens: function () {
        const screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {                            //СТРЕЛОЧНАЯ
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
        otherItemsPercent.forEach((item) => {                            //СТРЕЛОЧНАЯ
            const check = item.querySelector('input[type=checkbox]');
            const lable = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[lable.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach((item) => {                              //СТРЕЛОЧНАЯ
            const check = item.querySelector('input[type=checkbox]');
            const lable = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[lable.textContent] = +input.value;
            }
        });
    },
    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        totalCountRollback.value = this.servicePercentPrice;
        fullTotalCount.value = this.fullPrice;
        totalCount.value = this.count;
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
        let totalPrice = this.screens.reduce((acc, product) => {
            return +product.price + acc;
        }, 0);
        this.screenPrice = totalPrice;

        appData.count = this.screens.reduce((acc, screen) => acc + screen.count, 0);

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
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

    preStart: function () {
        appData.start();
        buttonStart.replaceWith(buttonReset);
        buttonReset.style.display = '';

        document.querySelectorAll('.main-controls__views:first-child .main-controls__item').forEach((item, index) => {
            item.querySelector('.main-controls__input input').disabled = true;
            item.querySelector('.main-controls__select select').disabled = true;
        });
    },

    clear: function () {

        appData.screens.length = 0;
        appData.servicesPercent.length = 0;
        appData.servicesNumber.length = 0;
        appData.screenPrice = 0;
        appData.screenCount = 0;
        appData.servicePricesPercent = 0;
        appData.servicePricesNumber = 0;
        appData.fullPrice = 0;
        appData.servicePercentPrice = 0;

        total.value = 0;
        totalCountOther.value = 0;
        totalCountRollback.value = 0;
        fullTotalCount.value = 0;
        totalCount.value = 0;

        buttonReset.replaceWith(buttonStart);


        appData.rollback = 0;
        spanValue.textContent = 0 + '%';
        rangeInput.value = 0;

        disable.forEach((item, index) => {
            item.querySelector('.main-controls__input input').disabled = false;
            item.querySelector('.main-controls__select select').disabled = false;

            item.querySelector('input').value = '';
            item.querySelector('select').value = '';
        });

        let itemScreen = document.querySelectorAll('.main-controls__views.element .main-controls__item.screen');
        itemScreen.forEach((item, index) => {
            if (index > 0) {
                item.remove();
            }
        });

        elements.forEach(function (item, index) {
            item.checked = false;
        });

        cms.checked = false;

    },

    logger: function () {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
        console.log(this.count);
    },
};
appData.init();


