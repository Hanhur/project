"use strict"

let num = 50;
while (num <= 55) {
    //console.log(num);
    num++;
}

do {
    //console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    //console.log(i);
}
//==============================================================

for (let i = 0; i < 3; i++) 
{
    //console.log(i);
    for (let j = 0; j < 3; j++) 
    {
        //console.log(j);
    }
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++) 
{
    for (let j = 0; j < i; j++) 
    {
        result += "*";
    }
    result += '\n';
}

//console.log(result);

first: for (let i = 0; i < 3; i++) 
{
    //console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) 
    {
        //console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) 
        {
            if(k === 2) break first;
            //if(k === 2) continue first;
            //console.log(`Third level: ${k}`);
        }
    }
}

//=================================================================
function firstTask()
{
    for(let i = 5; i <= 10; i++)
    {
        console.log(i);
    }
}
//firstTask();

function secondTask() 
{
    for(let i = 20; i > 13; i--)
    {
        console.log(i);
    }  
}
//secondTask();

function thirdTask() 
{
    for(let i = 2; i <= 10; i += 2)
    {
        console.log(i);
    }
}
//thirdTask();

function fourthTask() 
{
    let i = 2;

    while (i <= 16) 
    {
        if (i % 2 === 0) 
        {
            i++;
            continue;
        } 
        else 
        {
            console.log(i);
        }
        i++;
    }
}

//fourthTask()

function fifthTask() 
{
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) 
    {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()