class molecule {
    constructor(radius, xSpeed, ySpeed) {
        this.posX = Math.round(Math.random() * 500);
        this.posY = Math.round(Math.random() * 500);

        this.xSpeed = Math.round(Math.random() * xSpeed);
        this.ySpeed = Math.round(ySpeed);
        this.radius = Math.round(radius);
    }

    //updates the values from the GUI
    updateVals(xSp, ySp, rad) {
        this.xSpeed = Math.round(Math.random() * xSp);
        this.ySpeed = ySp;
        this.radius = rad;
    }

    move() {
        this.posX = this.posX + this.xSpeed;
        this.posY = this.posY + this.ySpeed;

        if (this.posX > 500) { this.posX = 0 }
        if (this.posX < 0) { this.posX = 500 }
        if (this.posY > 500) { this.posY = 0 }
        if (this.posY < 0) { this.posY = 500 }
    }

    render() {
        fill(12, 200, 12);
        ellipse(this.posX, this.posY, this.radius)
    }
}