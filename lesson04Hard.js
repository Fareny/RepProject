let result = prompt('Напиши тут:');

const red = function (button) {
    button = button.trim();
    if (typeof button !== 'string') {
        alert('В качестве аргумента передана не строка');
    } else if (button.length > 30) {
        console.log(button.slice(0, 30) + '...');
    } else {
        console.log(button);
    }
};
red(result);
