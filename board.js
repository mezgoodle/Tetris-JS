'use strict';
class Board {
    grid;

    // Reset the board when we start a new game.
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // Get matrix filled with zeros.
    getEmptyBoard() {
        return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    }

    valid(p) {
        return p.shape.every((row, dy) => {
                return row.every((value, dx) => {
                        let x = p.x + dx;
                        let y = p.y + dy;
                        return (
                            this.isEmpty(value) ||
                            (this.insideWalls(x) &&
                                this.aboveFloor(y)
                            );
                        });
                });
        }
    }