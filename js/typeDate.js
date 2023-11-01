"use strict";
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
console.log(typeof(Number('4')));

console.log(typeof(+'5')); // Унарный прлюс

console.log(typeof(parseInt("15px", 10)));

//let answ = +prompt("Hello", "");

// To Boolean
// 0, '', null, undefined, NaN = false;

let switcher = null;
if(switcher)
{
    console.log("Working...");
}

switcher = 1;
if(switcher)
{
    console.log("Working...");
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!"4444")); // Boolean