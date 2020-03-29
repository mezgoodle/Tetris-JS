'use strict';
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

moves = {
    [KEY.LEFT]: p => ({...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({...p, x: p.x + 1 }),
    [KEY.UP]: p => ({...p, y: p.y + 1 })
};

let board = new Board();

function play() {
    board = getEmptyBoard();
    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
}