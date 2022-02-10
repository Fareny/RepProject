function returnTime(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        day = days[date.getDay()];

    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
        'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'],
        month = months[date.getMonth()];

    const hours = ['час', 'часа', 'часов'],
        getHour = date.getHours(),
        hour = number(getHour, hours);

    const minutes = ['минута', 'минуты', 'минут'],
        getMinute = date.getMinutes(),
        minute = number(getMinute, minutes);

    const seconds = ['секунда', 'секунды', 'секунд'],
        getSecond = date.getSeconds(),
        second = number(getSecond, seconds);

    let date1 = 'Сегодня ' + day + ', ' + date.getDate() + ' ' + month + ' ' + date.getFullYear() + ' года' + ', ';
    let date2 = getHour + ' ' + hour + ' ' + getMinute + ' ' + minute + ' ' + getSecond + ' ' + second;
    return date1 + date2;
}

const number = (num, tit) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return tit[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
};

function returnZero(num) {
    return num <= 9 ? '0' + num : num;
}
setInterval(function () {
    let date = new Date();

    let fullDate = returnZero(date.getDate()) + '.' + returnZero(date.getMonth() + 1) + '.' + date.getFullYear();
    let time = returnZero(date.getHours()) + ':' + returnZero(date.getMinutes()) + ':' + returnZero(date.getSeconds());
    let dateText = '<b>' + returnTime(date) + '</b>' + '<br>' + '<b>' + fullDate + ' ' + time + '</b>';
    document.body.innerHTML = dateText;
}, 1000);