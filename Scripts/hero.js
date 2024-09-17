import { GameObject } from "./gameObject.js";
import { LEFT, RIGHT, UP, DOWN, ACTION } from "./input.js";
import { TILE_SIZE, } from "./main.js";

import {StandingLeft, StandingRight, StandingUp, StandingDown, WalkingLeft, WalkingRight, WalkingUp, WalkingDown, ActionLeft, ActionRight, ActionUp, ActionDown} from "./heroStates.js"

export class Hero extends GameObject{
    constructor ({game, sprite, position, scale}){
        super({game, sprite, position, scale});
        this.speed = TILE_SIZE*3;
        this.states = [new StandingLeft(this), new StandingRight(this), new StandingUp(this), new StandingDown(this), new WalkingLeft(this), new WalkingRight(this), new WalkingUp(this), new WalkingDown(this), new ActionLeft(this), new ActionRight(this), new ActionUp(this), new ActionDown(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
    }

    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }

    update(deltaTime){
        this.currentState.handleInput(this.game.input,deltaTime)
        
        // Movement of the hero
        let nextX = this.destinationPosition.x;
        let nextY = this.destinationPosition.y;
        
        const scaledSpeed = this.speed * (deltaTime / 1000);  // 1000 miliseconds

        const distance = this.moveTowards(this.destinationPosition, scaledSpeed);
        const arrived = distance <= scaledSpeed;
        
        if (arrived) {
            if (this.game.input.lastKey === LEFT ){
                nextX -= TILE_SIZE;   
            } else if (this.game.input.lastKey === RIGHT ){
                nextX += TILE_SIZE;
            } else if (this.game.input.lastKey === UP ){
                nextY -= TILE_SIZE;
            } else if (this.game.input.lastKey === DOWN ){
                nextY += TILE_SIZE;
            } 
            
            this.destinationPosition.x = nextX;
            this.destinationPosition.y = nextY;
        }
        
        // Sprite animation according to state
        if (this.game.eventUpdate){
            if (this.sprite.x < this.maxFrame) {
                this.sprite.x ++
            } else {
                this.sprite.x = 0;
            }
        }
        

        //NOTA: PARA QUE EL HEROE PUEDA HACER OTRAS ACCIONES SE DEBEN IMPLEMENTAR ESTADOS
        // Algo así como que al presionar una tecla está en el estado de caminar
        // o que está en el estado de ejecutar acción
        
    }


}