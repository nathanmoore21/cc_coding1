//alien class
class Alien{
    constructor(x,y){
        this.pos = createVector(x,y);
        //this will change the position of aliens
        this.velocity = alienVelocity;
    }

    render(){
        push() //add items to array
        translate(this.pos.x,this.pos.y);
        fill(64,146,23);
        ellipse(0,0, alienWidth, alienHeight );
        pop() //remove items from array
    }

    move(){
        this.pos.x += this.velocity;
    }

    shift(){
        this.pos.y += shiftDown;
        this.velocity *= -1;
    }
}    