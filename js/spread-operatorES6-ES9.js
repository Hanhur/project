"use strict";

let a = 5, 
b = a;

b = b + 5;
// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
}

// const copy = obj; // Ссылку
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) 
{
    let objCopy = {};

    let key;
    for(key in mainObj)
    {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);
//=======================================================
const add = {
    d: 17,
    e: 20
}

//console.log(Object.assign({}, add));

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dgdggrtgr';
// console.log(newArray);
// console.log(oldArray);
//============================================
const video = ['youtube', 'vimeo', 'rutube'],
blogs = ['worldpress', 'livejournal', 'blogger'],
internet = [...video, ...blogs, 'vk', 'facebook'];

//console.log(internet);

function log(a, b, c)
{
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

const num = [2, 5, 7];

log(...num);
//=======================================================
const array = ["a", "b"];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
}

const newObj = {...q};

//=======================================================================
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) 
    {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) 
        {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) 
{
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) 
{
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) 
    {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);
//========================================================================
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) 
{
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return str;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) 
{
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);
//===========================================================================

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') 
    {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) 
{
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) 
    {
        if (curr !== missingCurr) 
        {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');