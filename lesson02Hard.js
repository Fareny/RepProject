let num = 266219;
let result = num.toString().split('').reduce((numberOne, numberTwo) => numberOne * numberTwo);
result = result ** 3;
result.slice(0, 2);

console.log(result);
