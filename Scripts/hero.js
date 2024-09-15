import { GameObject } from "./gameObject.js";
import { LEFT, RIGHT, UP, DOWN, ACTION } from "./input.js";
import { ROWS, COLS, TILE_SIZE, HALF_TILE_SIZE } from "./main.js";

export class Hero extends GameObject{
    constructor ({game, sprite, position, scale}){
        super({game, sprite, position, scale});
        this.speed = TILE_SIZE*3;
        this.moveMaxFrame = 8;
        this.isMoving = false;
    }

    update(deltaTime){

        let nextX = this.destinationPosition.x;
        let nextY = this.destinationPosition.y;

        const scaledSpeed = this.speed * (deltaTime / 1000) || 10;  // 1000 miliseconds

        const distance = this.moveTowards(this.destinationPosition, scaledSpeed);
        const arrived = distance <= scaledSpeed;
        
        if (arrived) {
            if (this.game.input.lastKey === LEFT ){
                nextX -= TILE_SIZE;
                this.sprite.y = 9;
                // this.moving()
            } else if (this.game.input.lastKey === RIGHT ){
                nextX += TILE_SIZE;
                this.sprite.y = 11;
                // this.moving()
            } else if (this.game.input.lastKey === UP ){
                nextY -= TILE_SIZE;
                this.sprite.y = 8;
                // this.moving()
            } else if (this.game.input.lastKey === DOWN ){
                nextY += TILE_SIZE;
                this.sprite.y = 10;
                // this.moving()
            } else if (this.game.input.lastKey === ACTION ){
                this.sprite.y = 1;
            }
            this.destinationPosition.x = nextX;
            this.destinationPosition.y = nextY;
        }


        // Hero is moving
        if (this.game.input.keys.length > 0 && !arrived){
            this.isMoving = true;
        } else {
            this.isMoving = false;
            this.sprite.x = 0;
        }
      
        if (this.game.eventUpdate && this.isMoving){
            this.sprite.x < this.moveMaxFrame ? this.sprite.x++ : this.sprite.x = 0;
        } else if (!this.isMoving){
        this.sprite.x = 0;
        }

        //NOTA: PARA QUE EL HEROE PUEDA HACER OTRAS ACCIONES SE DEBEN IMPLEMENTAR ESTADOS
        // Algo así como que al presionar una tecla está en el estado de caminar
        // o que está en el estado de ejecutar acción
        
    }


}