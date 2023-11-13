"use strict";

// const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    // [birthday]: '20/04/2021',
    birthday: '20/04/1993',
    showMyPublicData: function() 
    {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

// for(let key in user) 
// {
//     console.log(key);
// }

// console.log(Object.getOwnPropertyDescriptor(user, birthday));

// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// });

// Object.defineProperty(user, 'name', {writable: false});

// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// // writable 
// enumerable 
// configurable 
//=========================================================================
// Итерируемые конструкции

for(let key in user) 
{
    // console.log(user[key]);
}

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function(){};

for(let key of arr) 
{
    // console.log(key);
}
// for(let key in arr) 
// {
//     console.log(arr[key]);
// }

const str = 'string';

for(let key in str) 
{
    // console.log(str[key]);
}

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() 
    {
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function() 
{
    return {
        current: this.john,
        last: this.ann,
        next() 
        {
            if(this.current < this.last)
            {
                this.current += 500;
                return {
                    done: false,
                    value: this.current
                }
            }
            else 
            {
                return {
                    done: true
                }
            }
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for(let res of salaries) 
// {
//     console.log(res);
// }