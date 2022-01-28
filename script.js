let title = "RepProject";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 300;
let rollback = 50;
let fullPrice = 999999;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase().split(", "));
console.log("Процент отката посреднику за работу - " + fullPrice * (rollback / 100) + " долларов");