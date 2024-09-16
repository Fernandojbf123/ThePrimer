import { GameObject } from "./gameObject.js";
import { COLS, ROWS, TILE_SIZE } from "./main.js";

export class EnemyTypeOne extends GameObject {
    constructor({game, sprite, position, scale, speed}){
        super({game, sprite, position, scale})
        this.speed = TILE_SIZE * speed || TILE_SIZE * 4;
        this.initialPosX = this.position.x;
        this.initialPosY = this.position.y; 
        this.currentPosX = this.position.x;
        this.currentPosY = this.position.y;
        this.currentMove = 0;
        this.maxMoves = 5;
        this.difX = 0;
        this.difY = 0;
    }
    
    update(deltaTime){
        

        if (this.game.eventUpdate) {

            const pickMove = Math.round(Math.random());
            const newPos = Math.round(Math.random() * 2 - 1);
        
            const scaledSpeed = this.speed * (deltaTime / 1000);  // 1000 miliseconds
            const distance = this.moveTowards(this.destinationPosition, scaledSpeed);

            const arrived = distance <= scaledSpeed;
            
            if (arrived && this.currentMove < this.maxMoves)  {

                if (pickMove === 0){ // move X
                    this.destinationPosition.x += TILE_SIZE * newPos;
                    this.currentPosX = this.destinationPosition.x;
                } else{ // move Y
                    this.destinationPosition.y += TILE_SIZE * newPos;
                    this.currentPosY = this.destinationPosition.y;
                }

                this.currentMove++;
                
            } else if (arrived && this.currentMove >= this.maxMoves) {

                this.difX = this.currentPosX - this.initialPosX;
                this.difY = this.currentPosY - this.initialPosY;
                // console.log(`x = ${this.currentPosX} y = ${this.currentPosY}`)
                // console.log(`x = ${this.difX} y = ${this.difY}`)

                if (Math.abs(this.difX) > 0){
                    this.destinationPosition.x = this.initialPosX;
                    this.currentPosX = this.initialPosX;
                } else {
                    this.destinationPosition.y = this.initialPosY;
                    this.currentPosY = this.initialPosY;
                }

                if (this.difX === 0 && this.difY === 0){
                    this.currentMove = 0;
                }
                
            }            
        }


        // if (arrived){
        //     if (pickMove === 0){
        //         this.destinationPosition.x = this.position.x
        //         this.position.x += TILE_SIZE * newPos;
        //     } else {
        //         this.destinationPosition.y = this.position.y
        //         this.position.y += TILE_SIZE * newPos;
        //     }          
            
        //     if (this.game.eventUpdate) {
        //         console.log(this.position.x)
        //         // this.destinationPosition.x += this.position.x;
        //         // this.destinationPosition.y += this.position.y;
                
        //     }
            
        // }
    }

}
    

    
    
