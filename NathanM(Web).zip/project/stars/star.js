class star {
    constructor() {
        this.pos = createVector(Math.round(Math.random() * 5000), Math.round(Math.random() * 5000));
        this.speed = createVector(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5);
        this.vec = createVector(0,0);
        this.size = Math.round(Math.random() * 10 + 2);
        this.scale = 0.1;
        this.col = 255, 255, 255;
    }

    //updating the values in the GUI
    updateVals(xVec, yVec, sc, fC) {
        this.vec.x = xVec;
        this.vec.y = yVec;
        this.scale = sc;
        this.col = fC;
    }

    move() {
        this.pos.x += this.speed.x * this.vec.x;
        this.pos.y += this.speed.y * this.vec.y;

        let xMax = width * 10 / this.scale;
        let yMax = height * 10 / this.scale;

        if (this.pos.x > xMax) { this.pos.x = 0 }
        if (this.pos.x < 0) { this.pos.x = xMax }
        if (this.pos.y > yMax) { this.pos.y = 0 }
        if (this.pos.y < 0) { this.pos.y = yMax }
    }

    render() {
        push();
        scale(0.1);//creates the stars(small)
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading())
        noStroke();
        fill(this.col);
        ellipse(224, 184, this.size);
        pop();
    }
}