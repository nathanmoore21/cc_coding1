// shoorting star
var x = -50;
var y = 500;
var sStarWidth = 5;
var sStarHeight = 5;

// background stars
let stars = [];
let howManyold

let params = {
    // how many stars there will be
	howManyStars: 400,
	howManyMin: 100,
    howManyMax: 500,
 
    // the x direction the stars will be moving
	increaseX: -0.5,
	increaseXMin: -2,
    increaseXMax: 2,
    increaseXStep: 0.25,

    //the y direction the stars will be moving
    increaseY: -0.5,
	increaseYMin: -2,
    increaseYMax: 2,
    increaseYStep: 0.25,
    
    //space background
    bgColor: [0, 0, 0],
    //stars
    fColor: [255, 255, 255],
}

//gui
let visible = true;
var gui;

function populateArray() {
    for (i = 0; i <  params.howManyStars; i++) {
        stars.push(new star());
    }
}

//what is displayed on screen
function setup() {
    populateArray();
    createCanvas(500, 500);
    background(params.bgColor);

// created the gui
	gui = createGui('Change Value of Stars');
    gui.setPosition(530, 10);
	gui.addObject(params);
}

//what is drawn on screen
function draw() {
    background(params.bgColor);

//x, y, w, h for the shooting star
    x += 11;
    y -= 8;
    sStarWidth *= 99/100;
    sStarHeight *= 99/100;
    
//if the number of stars has been increased/decreased draw the array again
    if (howManyold != params.howManyStars) {
        stars = [];

//draw the arrray
    populateArray();
    }
    
    stars.forEach(star => {
        star.updateVals(params.increaseX, params.increaseY, params.scale, params.fColor)
        star.move();
        star.render();

        ellipse(x, y, sStarWidth, sStarHeight);
    });

    howManyold = params.howManyStars
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      case 's':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }

