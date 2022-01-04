// bullet class
class Bullet{
    constructor(x,y,a){
        this.pos = createVector(x,y);
        this.angle = a;
    }

    render(){
        push() //add to array
        translate(this.pos.x,this.pos.y);
        fill(0,0,255);
        ellipse(0,0, bulletWidth, bulletHeight );
        pop() //remove from array
    }

    //using maths to alter the bull;ets velocity
    move(){
        this.pos.x += Math.cos(this.angle)*bulletVelocity;
        this.pos.y += Math.sin(this.angle)*bulletVelocity;
    }

    //what will happen when the bullet hits the alien
    hits(alien){
        let distance = (p5.Vector.sub(this.pos,alien.pos)).mag();
        if(distance < bulletHeight/2 + alienHeight/2){
            return true;
        } else {
            return false;
        }
    }
}    