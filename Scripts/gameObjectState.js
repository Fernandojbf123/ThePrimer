import { LEFT, RIGHT, UP, DOWN, ACTION } from "./input.js";


export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
}

class ObjectState {
    constructor(state){
        this.state = state;
    }
}

export class StandingLeft extends ObjectState {
    constructor(character){
        super('LEFT')
        this.character = character;
    }
    enter(){ //y is the number of the sprite in y position
        this.character.sprite.y = 9;        
    }
    // Standing left
    handleInput(input){
        if (input === LEFT) {
            this.character.setState(states.STANDING_LEFT);
        }
    }
}

export class StandingRight extends ObjectState {
    constructor(character){
        super('RIGHT')
        this.character = character;
    }
    enter(){ //y is the number of the sprite in y position
        this.character.sprite.y = 11;        
        console.log(this.character.sprite)
    }
    // Standing left
    handleInput(input){
        console.log(input)
        if (input === RIGHT) {
            this.character.setState(states.STANDING_RIGHT);
        }
    }
}


// export class objectState {
//     standing(){}
//     walkingLeft(){}
//     walkingRight(){}
//     walkingUp(){}
//     walkingDown(){}
//     performActionLeft(){}
//     performActionRight(){}
//     performActionUp(){}
//     performActionDown(){}

//     walkingAnimation(){
//         console.log(this.game)
//         // if (this.game.eventUpdate){
//         //     this.sprite.x < this.moveMaxFrame ? this.sprite.x++ : this.sprite.x = 0;
//         // } else if (!this.isMoving){
//         // this.sprite.x = 0;
//         // }
//     }
// }

// export class standingState extends objectState{
    
//     standing(character) {
//         console.log("Detenido sin hacer nada")
//     }

//     walkingLeft(character){
//         console.log("Cambiando hacia la izquierda")
//         character.setState(new walkingLeftState());
//     }

//     walkingRight(character){
//         console.log("Cambiando hacia la derecha")
//         character.setState(new walkingRightState());
//     }

//     walkingUp(character){
//         console.log("Cambiando hacia arriba")
//         character.setState(new walkingUpState());
//     }

//     walkingDown(character){
//         console.log("Cambiando hacia abajo")
//         character.setState(new walkingDownState());
//     }

//     performActionLeft(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }
    
//     performActionRight(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }

//     performActionUp(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }

//     performActionDown(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }
// }

// export class walkingLeftState extends objectState{
    
//     standing(character) {
//         console.log("Detenido sin hacer nada")
//     }

//     walkingLeft(character){
//         console.log("HOLS a la izquierda");
//         this.walkingAnimation();
//     }

//     walkingRight(character){
//         console.log("Cambiando hacia la derecha")
//         character.setState(new walkingRightState());
//     }

//     walkingUp(character){
//         console.log("Cambiando hacia arriba")
//         character.setState(new walkingUpState());
//     }

//     walkingDown(character){
//         console.log("Cambiando hacia abajo")
//         character.setState(new walkingDownState());
//     }

//     performActionLeft(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }
    
//     performActionRight(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }

//     performActionUp(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }

//     performActionDown(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }
// }

// export class walkingRightState extends objectState{
//     standing(character) {
//         console.log("Detenido sin hacer nada")
//     }
    
//     walkingLeft(character){
//         console.log("Cambiando hacia la izquierda");
//         character.setState(new walkingLeftState());
//     }

//     walkingRight(character){
//         console.log("Caminando hacia la derecha")
//     }

//     walkingUp(character){
//         console.log("Cambiando hacia arriba")
//         character.setState(new walkingUpState());
//     }

//     walkingDown(character){
//         console.log("Cambiando hacia abajo")
//         character.setState(new walkingDownState());
//     }

//     performActionLeft(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }
    
//     performActionRight(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }

//     performActionUp(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }

//     performActionDown(character){
//         console.log("No se puede ejecutar acción mientras caminas")
//     }
// }

