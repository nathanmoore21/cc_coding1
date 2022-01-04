//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		// properties (X, Y) of arrow
		this.x = x;
		this.y = y;
		// arrow rotation
		this.rotation = rotation;
	}
	//this function will draw the arrow
	drawArrow() {
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);

		//rotate object
		rotate(this.rotation);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);	
	}

	//this will update the values to follow the X and Y posiotn of the mouse
	updateValues() {
		this.dy = mouseY - this.y;
		this.dx = mouseX - this.x;
		this.rotation=atan2(this.dy, this.dx);
	}

}

