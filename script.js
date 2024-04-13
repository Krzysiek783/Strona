let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(cellIndex) {
    if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
            alert(currentPlayer + ' wygrywa!');
            resetBoard();
        } else if (!board.includes('')) {
            alert('Remis!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // wiersze
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // kolumny
        [0, 4, 8], [2, 4, 6] // przekątne
    ];
    return winningConditions.some((condition) => {
        const [a, b, c] = condition;
        return board[a] !== '' && board[a] === board[b] && board[b] === board[c];
    });
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
    currentPlayer = 'X';
}
