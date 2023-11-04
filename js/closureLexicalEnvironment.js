"use strict";

// let number = 5;

// function logNumber() 
// {
//     let number = 4;
//     console.log(number);
// }

// number = 6;

// logNumber();
//============================================================
function createCounter()
{
    let counter = 0;

    const myFunction = function() 
    {
        counter += 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

//console.log(c1, c2, c3);

if (0) {
    //console.log('Done!');
}

//console.log(typeof(+'4'));

for (let i = 1; i < 5; i++) 
{
    //console.log(i + 1);
}

function foo(a,b) 
{
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
//console.log(result);

let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night' ;
console.log(time);