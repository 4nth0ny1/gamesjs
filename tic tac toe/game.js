let count = 0;
let playerTurn = false;
let playerX = [];
let playerO = [];
const message = document.querySelector('.message');

const winCombos = [
    [1,2,3],
    [4,5,6], 
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7] 
];

const counter = () => {
    count++;
}

const turn = (e) => {
    if (playerTurn === false) {
        playerTurn = true;
    } else {
        playerTurn = false;
    }
}

const checkWin = () => {
    if (playerTurn === true && count == 9) {
        message.textContent = 'tie, reload the page to play again'
    }
    for(let i = 0; i < winCombos.length; i++) {
        if (winCombos[i].every(elem => playerX.includes(elem))) {
            message.textContent = 'player X wins, reload the page to play again'
            board.removeEventListener('click', addText);
        } 
        if (winCombos[i].every(elem => playerO.includes(elem))) {
            message.textContent = 'player O wins, reload the page to play again'
            board.removeEventListener('click', addText);
        }
    }
}

const addText = (e) => {
    if (e.target.textContent == '' && playerTurn === false) {
        e.target.textContent = "X";
        counter();
        turn();
        playerX.push(parseInt(e.target.classList[1]));
        message.textContent = 'player Os turn'
        checkWin();
    } else if (e.target.textContent == '' && playerTurn === true) {
        e.target.textContent = "O";
        counter();
        turn();
        playerO.push(parseInt(e.target.classList[1]));
        message.textContent = 'player Xs turn'
        checkWin();
    } else if (e.target.textContent == 'X') {
        return
    } else if (e.target.textContent == "O") {
        return
    }
}

const board = document.querySelector('.board');
board.addEventListener('click', addText);

