"use strict"
let num = 20;

function showFirstMessage(text)
{
    console.log(text);
    let num = 10;
    //console.log(num);
}
//showFirstMessage("Hello World!");
//console.log(num);

// function calc(a, b)
// {
//     return (a + b);
// }
// console.log(calc(4, 5));

function ret() 
{
    let num = 50;
    return num;
}

const anotherNum = ret();
//console.log(anotherNum);
//===============================================
const logger = function()
{
    console.log("Hello");
}
//logger();
//====================================================
const calc = (a, b) =>  {
    console.log('1');
    return a + b;
}
//===================================================
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr)
{
    return curr * amount;
}

function promotion(result)
{
    console.log(result * discount);
}
const res = convert(500, usdCurr);
//promotion(res);

function test() 
{
    for(let i = 0; i < 5; i++)
    {
        console.log(i);
        if(i === 3) return;
    }
    console.log('Done');
}
//test();
//=================================================================
function sayHello(name) 
{
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) 
{
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) 
{
    if(typeof(times) !== 'number' || times <= 0) 
    {
        return num;
    }

    let str = '';

    for(let i = 1; i <= times; i++) 
    {
        if(i === times) 
        {
            str += `${num * i}`;
            // Тут без черточек в конце
        } 
        else 
        {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);