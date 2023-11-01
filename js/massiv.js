"use strict"

const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
arr.sort((a, b) => a - b);
console.log(arr);

// function compareNum(a, b) 
// {
//     return a - b;
// }

arr.forEach(function(item, i, arr)
{
    //console.log(`${i}: ${item} внутри массива ${arr}`);
});

for(let i = 0; i < arr.length; i++)
{
    //console.log(arr[i]);
}

for(let value of arr) 
{
    //console.log(value);
}

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));