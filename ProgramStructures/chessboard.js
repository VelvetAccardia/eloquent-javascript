/* 
A função antiga:

function chessboard (gridSize) {
    let hashes = '';

    for (let row = 0; row < gridSize; row++) {
        for (let column = 0; column < gridSize; column++) {
            if ((row + column) % 2 === 0) {
                hashes += ' ';
            } else {
                hashes += '#';
            }
        }
        hashes += '\n';
    }
    console.log(hashes);
}

*/

function chessboard (gridSize) {
    if (!Number.isInteger(gridSize)|| gridSize <= 0) {
        throw new Error('O tamanho do tabuleiro deve ser um número inteiro maior do que zero.')
    }

    const space = ' ';
    const hash = '#';

    let board = '';

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if ((row + col) % 2 === 0) {
                board += `${space}`;
            } else {
                board += `${hash}`;
            }
        }
        board += '\n';
    }

    console.log(board);
}

chessboard(10);