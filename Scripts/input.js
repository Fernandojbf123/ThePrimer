export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";
export const ACTION = "ACTION"

export class Input {
    constructor(){
        this.keys = [];

        //Press key
        window.addEventListener('keydown', (e) => {
            
            if (e.key === "ArrowLeft" || e.key.toLowerCase() == "a"){
                this.keyPressed(LEFT)
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() == "d") {
                this.keyPressed(RIGHT)
            } else if (e.key === "ArrowUp" || e.key.toLowerCase() == "w") {
                this.keyPressed(UP) 
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() == "s") {
                this.keyPressed(DOWN)
            } else if (e.key === "e" || e.key.toLowerCase() == "e") {
                this.keyPressed(ACTION)
            }
        })
    
        //Release Key
        window.addEventListener('keyup', e => {
            if (e.key === "ArrowLeft" || e.key.toLowerCase() == "a"){
                this.keyRealeased(LEFT)
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() == "d") {
                this.keyRealeased(RIGHT)
            } else if (e.key === "ArrowUp" || e.key.toLowerCase() == "w") {
                this.keyRealeased(UP) 
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() == "s") {
                this.keyRealeased(DOWN)
            } else if (e.key === "e" || e.key.toLowerCase() == "e") {
                this.keyRealeased(ACTION)
            }
        })
    }

    keyPressed(key){
        if (this.keys.indexOf(key) === -1){
            this.keys.unshift(key)
        }
        // console.log(key, this.keys)
    }

    keyRealeased(key){
        const index = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index,1)
    }

    get lastKey(){
        return this.keys[0];
    }
    
}

