import { TITLE_SIZE, COLS, ROWS } from "./main.js";


export class World {
    constructor() {
        this.level1 = {};
    }

    drawGrid(ctx) {
        for (let row = 0; row < ROWS; row++){
            for (let col = 0; col < COLS; col++){
                ctx.strokeRect(
                    col * TITLE_SIZE, 
                    row * TITLE_SIZE,
                    TITLE_SIZE,
                    TITLE_SIZE);
            }
        }
    }
}