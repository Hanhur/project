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

//let result = '';
const length = 7;

for (let i = 1; i < length; i++) 
{
    for (let j = 0; j < i; j++) 
    {
        //result += "*";
    }
    //result += '\n';
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

//fifthTask()
//==========================================================================
function firstTask() 
{
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) 
    {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
}

//firstTask();

function secondTask() 
{
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) 
    {
        if (typeof(data[i]) === 'number') 
        {
            data[i] = data[i] * 2;
        } 
        else if (typeof(data[i]) === 'string') 
        {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

//secondTask();

function thirdTask() 
{
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) 
    {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

//thirdTask();

//===================================================================
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) 
{
    for (let j = 0; j < lines - i; j++) 
    {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) 
    {
        result += "*";
    }
    result += "\n";
}

//console.log(result);

//==============================================================================
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) 
{
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) 
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

if(personalMovieDB.count < 10) 
{
    console.log("Просмотрено довольно мало фильмов");
}
else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) 
{
    console.log("Вы классический зритель");
} 
else if(personalMovieDB.count >= 30) 
{
    console.log("Вы киноман");
} 
else 
{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);