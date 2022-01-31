let lang = prompt('Вывести дни недели на ru или en?');
if (lang == 'ru') {
    console.log('Воскресенье \nПонедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота');
} else if (lang == 'en') {
    console.log('Sunday \nMonday \nTuesday \nWednesday \nThursday \nFriday \nSaturday');
} else {
    console.log('Не понимаю');
}

switch (lang) {
    case 'ru':
        console.log('Воскресенье \nПонедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота');
        break;
    case 'en':
        console.log('Sunday \nMonday \nTuesday \nWednesday \nThursday \nFriday \nSaturday');
        break;
    default:
        console.log('Не понимаю');
}

let array = {
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
console.log(array[lang]);

let namePerson = prompt('Введите имя');
let result;
result = (namePerson == 'Артём') ? 'директор' : namePerson == 'Александр' ? 'преподаватель' : 'студент';
console.log(result);



