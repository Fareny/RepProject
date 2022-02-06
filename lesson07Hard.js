const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = new Date();
let today = day.getDay() - 1;
if (today == -1) {
    today = 6;
}
for (let i = 0; i < week.length; i++) {
    if (i == today) {
        if (i > 4) {
            document.body.insertAdjacentHTML('beforeend', '<i><b>' + week[i] + '</b></i>' + '<br>');
        } else {
            document.body.insertAdjacentHTML('beforeend', '<b>' + week[i] + '</b>' + '<br>');
        }
    } else if (i > 4) {
        document.body.insertAdjacentHTML('beforeend', '<i>' + week[i] + '</i>' + '<br>');
    } else {
        document.body.insertAdjacentHTML('beforeend', '<span>' + week[i] + '</span>' + '<br>');
    }
}