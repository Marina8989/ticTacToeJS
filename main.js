let cells = document.querySelectorAll('[data-cell]');
let messageGameText = document.querySelector('.gameText');
const restartBtn = document.querySelector('#restartBtn');

let playerTurn;
const X_PLAYER = 'x';
const CIRCLE_PLAYER = 'circle';
const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7]
]

startGame()

restartBtn.addEventListener('click', startGame);

function startGame() {
    playerTurn = false;

    cells.forEach(cell => {
      cell.classList.remove(X_PLAYER);
      cell.classList.remove(CIRCLE_PLAYER);
      cell.removeEventListener('click', handleClass);
      cell.addEventListener('click', handleClass, {once: true})
  })
   messageGameText.classList.remove('show');
} 



function handleClass(e) {
    const item = e.target;
    let currentClass = playerTurn ? CIRCLE_PLAYER : X_PLAYER;
    
    placeMark(item, currentClass);

    if(checkWin(currentClass)) {
        gameOver(false);
    }else if(isDraw()) {
        gameOver(true);
    }else {
        swapTurns();
    }

}


//game over message id someone one 

function gameOver(draw) {
    if(draw) {
     winningCombo.innerText = 'Draw';
    }else{
        winningCombo.innerText = `${playerTurn ? "O's" : "X's"} Wins!`;
    }
    messageGameText.classList.add('show')
}


//start playing to find out the currentClass
function placeMark(item, currentClass) {
    return item.classList.add(currentClass);
}

function isDraw() {
    return [...cells].every(x => {
        return x.classList.contains(X_PLAYER) || x.classList.contains(CIRCLE_PLAYER);
    })
}

function swapTurns() {
    playerTurn = !playerTurn;
}

//check if any player won
function checkWin(currentClass) {
   return winningCombo.some(combination => {
       return combination.every(index => {
           return cells[index].classList.contains(currentClass)
       })
   })
}