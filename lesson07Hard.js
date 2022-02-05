const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = new Date();
let today = day.getDay() - 1;
for (let i = 0; i < week.length; i++) {
    if (i === today) {
        document.body.insertAdjacentHTML('beforeend', '<b>' + week[i] + '</b>' + ' ');
    } else if (i > 4) {
        document.body.insertAdjacentHTML('beforeend', '<i>' + week[i] + '</i>' + ' ');
    } else {
        document.body.insertAdjacentHTML('beforeend', '<div>' + week[i] + '</div>' + ' ');
    }

}