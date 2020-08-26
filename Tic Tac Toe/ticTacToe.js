// Getting players' names
let playerOneName = prompt("Insert Player 1 name!");
let playerTwoName = prompt("Insert Player 2 name!");

// Displaying players' names
let playerOne = document.getElementById('player-1')
let playerTwo = document.getElementById('player-2')
console.log(playerOne);
console.log(playerTwo);

playerOne.innerHTML=playerOneName;
playerTwo.innerHTML=playerTwoName;

// Display whose turn this is
let isPlayerOneTurn = true;
let turn = document.getElementById('player-turn');
turn.innerHTML=playerOneName + "'s turn!";

// let winnerFound = false;


// Just getting the elements
let ticTacToe = document.getElementById('tic-tac-toe');

let resetBtn = document.getElementById('reset-btn');

let boxOne = document.getElementById('box-one');
let boxTwo = document.getElementById('box-two');
let boxThree = document.getElementById('box-three');
let boxFour = document.getElementById('box-four');
let boxFive = document.getElementById('box-five');
let boxSix = document.getElementById('box-six');
let boxSeven = document.getElementById('box-seven');
let boxEight = document.getElementById('box-eight');
let boxNine = document.getElementById('box-nine');

// let winner;

// while (!winnerFound){
//     ticTacToe.addEventListener('click',newMove);
//     if(boxOne.classList.contains('clicked') && boxOne.classList==boxTwo.classList==boxThree.classList){
//         winnerFound=true;
//         if(isPlayerOneTurn){
//             winner=playerTwoName;
//         } else {
//             winner=playerOneName
//         }
//     }
// }

// alert(winner + " wins!")

// Checking if player clicked on the tic tac toe board
ticTacToe.addEventListener('click',newMove);

// Checking if player clicked on the reset button
resetBtn.addEventListener('click',resetBoard);

function newMove(e){
    let buttonClicked = e.target;

    // Player one clicked: Display red 'X'
    if(isPlayerOneTurn && !buttonClicked.classList.contains('clicked')){
        buttonClicked.classList.add('x','clicked');
        buttonClicked.innerHTML='X';
        turn.innerHTML=playerTwoName + "'s turn!";
    } 
    
    // Player two clicked: Display blue 'O'
    else if (!buttonClicked.classList.contains('clicked')){
        buttonClicked.classList.add('o','clicked');
        buttonClicked.innerHTML='O';
        turn.innerHTML=playerOneName + "'s turn!";
    }
    console.log(buttonClicked);

    // Change the player
    isPlayerOneTurn=!isPlayerOneTurn;
}

// Remove all the classes added and innerHtml of each boxes
function resetBoard(){
    boxOne.innerHTML='';
    boxOne.classList.remove('o','x','clicked');
    boxTwo.innerHTML='';
    boxTwo.classList.remove('o','x','clicked');
    boxThree.innerHTML='';
    boxThree.classList.remove('o','x','clicked');
    boxFour.innerHTML='';
    boxFour.classList.remove('o','x','clicked');
    boxFive.innerHTML='';
    boxFive.classList.remove('o','x','clicked');
    boxSix.innerHTML='';
    boxSix.classList.remove('o','x','clicked');
    boxSeven.innerHTML='';
    boxSeven.classList.remove('o','x','clicked');
    boxEight.innerHTML='';
    boxEight.classList.remove('o','x','clicked');
    boxNine.innerHTML='';
    boxNine.classList.remove('o','x','clicked');
}
