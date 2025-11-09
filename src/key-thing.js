// Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
// Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
// Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
// Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
// Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю
// Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify
// Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
// Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify

import { alert, defaultModules, info, success, error } from "@pnotify/core/dist/PNotify.js";

import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

const box = document.querySelector(".box")

const keys =  ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let currentKeyIndex = 0

let currentKey = keys[currentKeyIndex]

box.textContent = currentKey

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        info({
            text: "Game finished",
            delay: 500
        })
    }

    if (event.key === currentKey) {
        currentKeyIndex = Math.floor(Math.random() * (keys.length - 1) + 1)
        currentKey = keys[currentKeyIndex]
        box.textContent = currentKey
        success({
            text: "Correct",
            delay: 500,
        })
    }else{
        error({
            text: "Wrong",
            delay: 500
        })
    }
    
})

// let random = () => {return Math.floor(Math.random() * 9)}