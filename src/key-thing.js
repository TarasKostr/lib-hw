

const keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
let currentKeyIndex = 0

let currentKey = keys[Math.random()]

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    
})