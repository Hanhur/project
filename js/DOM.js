"use strict";

const box = document.getElementById('box');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = `background-color: blue; width: 500px`;

const btns = document.getElementsByTagName('button');
btns[1].style.borderRadius = '100%';

const circles = document.getElementsByClassName('circle');
circles[0].style.backgroundColor = 'red';
// circles[0].remove();

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// for(let i = 0; i < hearts.length; i++)
// {
//     hearts[i].style.backgroundColor = 'blue';
// }

const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);
// wrapper.removeChild(hearts[1]);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[0]);
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello Wolrd!</h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');