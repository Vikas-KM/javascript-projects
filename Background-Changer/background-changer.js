// learning
// Math.random function works from 0 to 0.99 never reaches one
// Math.floor is used to get the whole number except the decimal

const btn = document.getElementById('colorBtn');
console.log(btn);
const body = document.body;
let hexValue='#';
let hexValues = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeBackgroundColor(){
    console.log('button clicked');
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*hexValues.length);
        //hexvalue initally is string so + works as concat
        hexValue+=hexValues[random];
    }
    console.log(hexValue);
    body.style.backgroundColor = hexValue;
    hexValue='#';
}

//changeBackgroundColor is a callback function hence () are not attached
btn.addEventListener('click', changeBackgroundColor);