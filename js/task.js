"use strict";

//let x = 5;
//alert(x++); // 5

//[] + fasle - null + true;
//console.log([] + false - null + true); // NaN

// let y = 1;
// let x = y = 2;
// alert(x); // 2

//console.log([] + 1 + 2); // 12

//alert("1"[0]); // 1

//console.log(2 && 1 && null && 0 && undefined); // null

// console.log(!!(1 && 2) === (1 && 2)); // false

// alert(null || 2 && 3 || 4); // 3

// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 
// console.log(a == b); // false

// alert( +"Infinity" ); 

// console.log("Ёжик" > "яблоко"); // false

// console.log(0 || "" || 2 || undefined || true || false); // 2
//====================================================================

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
}

function isOpen(prop) 
{
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) 
{
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) 
    {
        return 'Цена ниже средней';
    } 
    else 
    {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) 
{
    const copy = Object.assign({}, data);
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);