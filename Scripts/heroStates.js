import { LEFT, RIGHT, UP, DOWN, ACTION } from "./input.js";
import { TILE_SIZE } from "./main.js";

const states = {
    STANDING_LEFFT: 0,
    STANDING_RIGHT: 1,
    STANDING_UP: 2,
    STANDING_DOWN: 3,
    WALKINKG_LEFT: 4,
    WALKING_RIGHT: 5,
    WALKING_UP: 6,
    WALKING_DOWN: 7,
    ACTION_LEFT: 8,
    ACTION_RIGHT: 9,
    ACTION_UP: 10,
    ACTION_DOWN: 11,
}

//Base state
class HeroState {
    constructor(state){
        this.state = state;
    }
    enter(){}
    handleInput(input){}
}

// Standing Left
export class StandingLeft extends HeroState{
    constructor(hero){
        super(states.STANDING_LEFFT);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.x = 0;
        this.hero.sprite.y = 1; // Row of sprite
        this.hero.maxFrame = 0; // Max frame standing position
    }

    handleInput(input){
        
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking right
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_LEFT);
        }else {
            this.hero.setState(states.STANDING_LEFFT);
        }

    }
}

// Standing Right
export class StandingRight extends HeroState{
    constructor(hero){
        super(states.STANDING_RIGHT);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.x = 0;
        this.hero.sprite.y = 3; // Row of sprite
        this.hero.maxFrame = 0; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
            
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_RIGHT);
        }else {
            this.hero.setState(states.STANDING_RIGHT);
        }
    }
}

// Standing up
export class StandingUp extends HeroState{
    constructor(hero){
        super(states.STANDING_UP);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.x = 0;
        this.hero.sprite.y = 0; // Row of sprite
        this.hero.maxFrame = 0; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_UP);
        }else {
            this.hero.setState(states.STANDING_UP);
        }
    }
}

// Standing Down
export class StandingDown extends HeroState{
    constructor(hero){
        super(states.STANDING_UP);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.x = 0;
        this.hero.sprite.y = 2; // Row of sprite
        this.hero.maxFrame = 0; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_DOWN);
        }else {
            this.hero.setState(states.STANDING_DOWN);
        }
    }
}

// Walking LEFT
export class WalkingLeft extends HeroState{
    constructor(hero){
        super(states.WALKINKG_LEFT);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 9; // Row of sprite
        this.hero.maxFrame = 8; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_LEFT);
        }else {
            this.hero.setState(states.STANDING_LEFFT);
        }
    }
}


// Walking Right
export class WalkingRight extends HeroState{
    constructor(hero){
        super(states.WALKING_RIGHT);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 11; // Row of sprite
        this.hero.maxFrame = 8; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_RIGHT);
        }else {
            this.hero.setState(states.STANDING_RIGHT);
        }
    }
}

// Walking Up
export class WalkingUp extends HeroState{
    constructor(hero){
        super(states.WALKING_UP);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 8; // Row of sprite
        this.hero.maxFrame = 8; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_UP);
        }else {
            this.hero.setState(states.STANDING_UP);
        }
    }
}

// Walking Down
export class WalkingDown extends HeroState{
    constructor(hero){
        super(states.WALKING_DOWN);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 10; // Row of sprite
        this.hero.maxFrame = 8; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_DOWN);
        }else {
            this.hero.setState(states.STANDING_DOWN);
        }
    }
}

// Action Left
export class ActionLeft extends HeroState{
    constructor(hero){
        super(states.ACTION_LEFT);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 1; // Row of sprite
        this.hero.maxFrame = 5; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_LEFT);
        }else {
            this.hero.setState(states.STANDING_LEFFT);
        }
    }
}

// Action Right
export class ActionRight extends HeroState{
    constructor(hero){
        super(states.STANDING_RIGHT);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 3; // Row of sprite
        this.hero.maxFrame = 5; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_RIGHT);
        }else {
            this.hero.setState(states.STANDING_RIGHT);
        }
    }
}

// Action up
export class ActionUp extends HeroState{
    constructor(hero){
        super(states.STANDING_UP);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 0; // Row of sprite
        this.hero.maxFrame = 5; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_UP);
        }else {
            this.hero.setState(states.STANDING_UP);
        }
    }
}

// Action Down
export class ActionDown extends HeroState{
    constructor(hero){
        super(states.STANDING_UP);
        this.hero = hero;
    }
    enter(){
        this.hero.sprite.y = 2; // Row of sprite
        this.hero.maxFrame = 5; // Max frame standing position
    }

    handleInput(input){
        if (input.lastKey === LEFT ){
            this.hero.setState(states.WALKINKG_LEFT); // Change state to walking left
        } else if (input.lastKey === RIGHT){
            this.hero.setState(states.WALKING_RIGHT);
        } else if (input.lastKey === UP){
            this.hero.setState(states.WALKING_UP);
        } else if (input.lastKey === DOWN){
            this.hero.setState(states.WALKING_DOWN);
        } else if (input.lastKey === ACTION){
            this.hero.setState(states.ACTION_DOWN);
        }else {
            this.hero.setState(states.STANDING_DOWN);
        }
    }
}


// nextX -= TILE_SIZE;
// nextX += TILE_SIZE;
// nextY -= TILE_SIZE;
// nextY += TILE_SIZE;
// this.hero.destinationPosition.x = nextX;
// this.hero.destinationPosition.y = nextY;