import { Hero } from "./hero.js";
import { Input } from "./input.js";
import { World } from "./world.js";

export const TITLE_SIZE = 32;
export const COLS = 15;
export const ROWS = 20;
const GAME_WIDTH = TITLE_SIZE * COLS;
const GAME_HEIGHT = TITLE_SIZE * ROWS;
 

// Event after all HTML and CSS elements are loaded
window.addEventListener('DOMContentLoaded', function () {
    const canvas = this.document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    const world = new World();
    world.drawGrid(ctx);

    const hero = new Hero({
        position: {x:1, y:1}
    });
    hero.draw(ctx);

    const input = new Input();

})