let salary = prompt("Введіть розмір вашої зарплати");
salary = Number(salary);

const prize = salary * 0.15;
const tax = (salary + prize) * 0.10;
const buys = 190;

const res = salary + prize - tax - buys;
console.log(res);

alert("У вас залишилось :" +  res)
