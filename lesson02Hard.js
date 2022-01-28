let num = 266219;
let result = num.toString().split('').reduce((numberOne, numberTwo) => numberOne * numberTwo);
result = result ** 3;
console.log(String(result.slice(0, 2)));
