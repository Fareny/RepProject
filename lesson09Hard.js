let date = new Date();

function returnTime() {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        day = days[date.getDay()];

    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
        'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'],
        month = months[date.getMonth()];

    const hours = ['час', 'часа', 'часов'],
        hour = date.getHours(),
        hour1 = number(hour, hours);

    const minutes = ['минута', 'минуты', 'минут'],
        minute = date.getMinutes(),
        minute1 = number(minute, minutes);

    const seconds = ['секунда', 'секунды', 'секунд'],
        second = date.getSeconds(),
        second1 = number(second, seconds);


    let date1 = 'Сегодня ' + day + ', ' + date.getDay() + ' ' + month + ' ' + date.getFullYear() + ' года' + ', ';
    let date2 = hour + ' ' + hour1 + ' ' + minute + ' ' + minute1 + ' ' + second + ' ' + second1;
    return date1 + date2;

}

const number = (num, tit) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return tit[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
};
document.body.insertAdjacentHTML('beforeend', '<b>' + returnTime() + '</b>' + '<br>');


// let res;
// function result() {
//     let fullDate2 = returnZero(date.getDate()) + '.' + returnZero(date.getMonth() + 1) + '.' + date.getFullYear();
// let time2 = returnZero(date.getHours()) + ':' + returnZero(date.getMinutes()) + ':' + returnZero(date.getSeconds());
//     return fullDate2 + ' ' + time2;
// }
// function returnZero(num) {
//     return num <= 9 ? '0' + num : num;
// }
let fullDate2 = returnZero(date.getDate()) + '.' + returnZero(date.getMonth() + 1) + '.' + date.getFullYear();
let time2 = returnZero(date.getHours()) + ':' + returnZero(date.getMinutes()) + ':' + returnZero(date.getSeconds());

function returnZero(num) {
    return num <= 9 ? '0' + num : num;
}



setInterval(function () {

}, 1000);

document.body.insertAdjacentHTML('beforeend', '<b>' + fullDate2 + ' ' + time2 + '</b>');