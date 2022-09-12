const gameBoardContainer = document.createElement('div');
const body = document.querySelector('body');

gameBoardContainer.setAttribute('class', 'gameBoard');

const gameBoard = () => {
    const gameBoardTable = [];
    const setTable = () => {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('p');
            square.setAttribute('class', 'square');
            square.textContent = 'X';
            gameBoardTable.push(square);
        }
    }
    setTable();
    const showTable = () => {
        gameBoardTable.forEach(element => gameBoardContainer.appendChild(element))
    }
const existe = () => console.log(gameBoardTable.length);
const content = () => console.log(gameBoardTable);
return { setTable, showTable, existe, content };
}

const game1 = gameBoard();

body.appendChild(gameBoardContainer);