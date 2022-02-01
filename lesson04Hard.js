let result = prompt('Напиши тут:');

const red = function (button) {
    if (typeof button !== 'string') {
        alert('В качестве аргумента передана не строка');
    } else if (button.length > 30) {
        button = button.trim();
        console.log(button.slice(0, 30) + '...');
    }
};
red(result);
