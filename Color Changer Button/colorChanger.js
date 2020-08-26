function changeColor(){
    document.body.style.backgroundColor='rgb('+randomNumber()+','+randomNumber()+','+randomNumber()+')';
}

function randomNumber(){
    return Math.floor(Math.random() * 256);
}

let colorBtn = document.getElementById('color-btn');
let isWhite = true;
colorBtn.addEventListener('click', changeColor);

