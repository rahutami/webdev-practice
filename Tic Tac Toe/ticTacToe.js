// Getting players' names
let playerOneName = prompt("Insert Player 1 name!");
let playerTwoName = prompt("Insert Player 2 name!");

// Displaying players' names
let playerOne = document.getElementById('player-1')
let playerTwo = document.getElementById('player-2')
console.log(playerOne);
console.log(playerTwo);

// Select Box
const boxes = document.querySelectorAll('button.box');
console.log(boxes);

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

    if(!buttonClicked.classList.contains('box')) return;

    // Player one clicked: Display red 'X'
    if(isPlayerOneTurn && !buttonClicked.classList.contains('clicked')){
        buttonClicked.classList.add('x','clicked');
        buttonClicked.innerHTML='X';
        turn.innerHTML = `${playerTwoName}'s turn!`;
    } 
    
    // Player two clicked: Display blue 'O'
    else if (!buttonClicked.classList.contains('clicked')){
        buttonClicked.classList.add('o','clicked');
        buttonClicked.innerHTML = 'O';
        turn.innerHTML = `${playerOneName}'s turn!`;
    }
    console.log(buttonClicked);

    // Change the player
    isPlayerOneTurn=!isPlayerOneTurn;
}

// Remove all the classes added and innerHtml of each boxes
function resetBoard(){
    for (let i = 0; i<boxes.length; i++){
        boxes[i].innerHTML = '';
        boxes[i].classList.remove('o','x','clicked');
    }
}
