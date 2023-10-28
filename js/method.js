"use strict";

const str = "test";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";
console.log(logg.slice(6));

console.log(logg.substring(6));

console.log(logg.substr(6));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
//=========================================================================
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */


let numberOfFilms;

function start() 
{
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) 
    {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() 
{
    for (let i = 0; i < 2; i++) 
    {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) 
        {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } 
        else 
        {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() 
{
    if (personalMovieDB.count < 10) 
    {
        console.log("Просмотрено довольно мало фильмов");
    } 
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) 
    {
        console.log("Вы классический зритель");
    } 
    else if (personalMovieDB.count >= 30) 
    {
        console.log("Вы киноман");
    } 
    else 
    {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) 
{
    if (!hidden) 
    {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() 
{
    for (let i = 1; i <= 3; i++) 
    {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
//=========================================================================================
function calculateVolumeAndArea(length) 
{
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) 
    {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) 
{
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) 
    {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) 
    {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);
//==============================================================================
function getTimeFromMinutes(minutesTotal) 
{
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) 
    {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) 
    {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);

function findMaxNumber(a, b ,c, d) 
{
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') 
    {
        return 0;
    } 
    else 
    {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');
//==========================================================================================================================================
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) 
    {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) 
    {
        if (i + 1 === num) 
        {
            result += `${first}`;
            // Без пробела в конце
        } 
        else 
        {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5);
//===========================================================================================================
