import { TITLE_SIZE } from "./main.js";


export class GameObject {
    constructor({
        game,
        sprite,
        position,
        scale
    }){
        this.game = game;
        this.sprite = sprite ?? {x: 0, y: 0, width: TITLE_SIZE, height: TITLE_SIZE, image: ""};
        this.position = position ?? {x: 0,y: 0};
        this.scale = scale ?? 1;
    }
    draw(ctx){
        ctx.fillRect(
        this.position.x * TITLE_SIZE, 
        this.position.y * TITLE_SIZE,
        TITLE_SIZE,
        TITLE_SIZE);
    }
            
}