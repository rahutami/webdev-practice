const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
let leftBracket = false;
let op1, op2="", opr="";
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', addDisplay);
}

function addDisplay(e){
    console.log(Number(e.target.textContent));
    if(e.target.textContent === "C"){
        screen.textContent = screen.textContent.slice(0,-1);
    } else if (e.target.textContent === "( )"){
        if (leftBracket === false){
            screen.textContent += "(";
            leftBracket = true;
        } else {
            screen.textContent += ")";
            leftBracket = false;
        }
    }else if (e.target.textContent === "="){
        countResult(op1, op2, opr);
    } else if (!isNaN(Number(e.target.textContent))){
        screen.textContent += e.target.textContent;
    }
}