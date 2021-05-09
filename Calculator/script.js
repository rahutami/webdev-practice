const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
let leftBracket = false;
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', addDisplay);
}

function countResult(){
    console.log("counting...");
}

function addDisplay(e){
    console.log(e.target.textContent);
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
        countResult();
    } else {
        screen.textContent += e.target.textContent;
    }

    // switch(e.target.textContent){
    //     case "1":
    //         textDisplayed += "1";
    //         break;
    //     case "2":
    //         textDisplayed += "2";
    //         break;
    //     case "3":
    //         textDisplayed += "3";
    //         break;
    //     case "4":
    //         textDisplayed += "4";
    //         break;
    //     case "4":
    //         textDisplayed += "4";
    //         break;
    //     case "1":
    //         textDisplayed += "1";
    //         break;
    // }
    // screen.textContent = textDisplayed;
}