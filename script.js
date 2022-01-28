let title = "RepProject";
let screens = ("Простые, Сложные, Интерактивные");
let screenPrice = 300;
let rollback = Math.random(1, 100); //будет считать от 0 до 99? Или от 1 до 100?
let fullPrice = 999999;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log(screenPrice + " долларов");
console.log(fullPrice + " долларов");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100)); //процент нужен от с целыми числами?