let num = 266219;
let result = num.toString().split('').reduce((res, item) => item * res);

console.log(result);
