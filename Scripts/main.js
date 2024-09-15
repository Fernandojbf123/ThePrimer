import { Hero } from "./hero.js";
import { Input } from "./input.js";
import { World } from "./world.js";

export const TILE_SIZE = 32;
export const HALF_TILE_SIZE = TILE_SIZE / 2;
export const COLS = 15;
export const ROWS = 20;
const GAME_WIDTH = TILE_SIZE * COLS;
const GAME_HEIGHT = TILE_SIZE * ROWS;
 

// Event after all HTML and CSS elements are loaded
window.addEventListener('DOMContentLoaded', function () {
    const canvas = this.document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;


    class Game {
        constructor(){
            this.world = new World();
            this.hero = new Hero({
                game: this,
                sprite: {
                    image: document.getElementById('hero1'),
                    x: 0, 
                    y: 0, 
                    width: 64, 
                    height: 64,
                },
                position: {x:1 * TILE_SIZE, y: 2 * TILE_SIZE},
                scale: .8,
            });
            this.input = new Input();

            this.eventUpdate = false;
            this.eventTimer = 0;
            this.eventInterval = 60;
        }
            
        render(ctx,deltaTime){
            this.hero.update(deltaTime);
            this.world.drawBackground(ctx)
            this.world.drawGrid(ctx);
            this.hero.draw(ctx);
            this.world.drawForeground(ctx)

            if (this.eventTimer < this.eventInterval){
                this.eventTimer += deltaTime;
                this.eventUpdate = false;
            } else {
                this.eventTimer = 0;
                this.eventUpdate = true;
            }
        }
    }



    const game = new Game();
    
    let lastTime = 0;
    animate()

    
    function animate(timeStamp){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT); // You can delete this if using an image as bg
        
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        
        game.render(ctx,deltaTime);
    }

})