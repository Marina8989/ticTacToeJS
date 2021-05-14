const cells = document.querySelectorAll('.cell');
console.log(cells);
let playerTurn;
const X_PLAYER = 'x';
const CIRCLE_PLAYER = 'circle';

cells.forEach(cell => {
    cell.addEventListener('click', handleClass, {once: true})
})



function handleClass(e) {
    const item = e.target;

    if(playerTurn) {
        item.classList.add(X_PLAYER);
        playerTurn = !playerTurn;
    }else{
        item.classList.add(CIRCLE_PLAYER);
        playerTurn = !playerTurn;
    }
    
}