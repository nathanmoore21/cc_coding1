let molecules = [];
let howManyold
let numOfMolecules = 50;

let params = {
	howMany: 15,
	howManyMin: 2,
    howManyMax: 100,

	speedX: 5,
	speedXMin: -25,
    speedXMax: 25,
    
    speedY: 5,
	speedYMin: -25,
    speedYMax: 25,
    
    radius: 10,
	radiusMin: 5,
    radiusMax: 50

   
}

var bgColor = [180, 255, 255];

let visible = true;
var gui;

function populateArray(r,xSp, ySp) {
    for (i = 0; i < params.howMany; i++) {
        molecules.push(new molecule(r,xSp,ySp));
    }
    return console.log("population complete", )
}

function setup() {
    createCanvas(500, 500);
    background(bgColor);
    populateArray(params.radius, params.speedX, params.speedY);
    // create the GUI
	gui = createGui('Change Molecules');
	gui.addObject(params);
    gui.addGlobals('bgColor');
}

function draw() {
    clear(); //remove all elemnts
    background(bgColor);

    if (howManyold != params.howMany) {
        molecules = [];
        populateArray(params.radius, params.speedX, params.speedY);
    }

    molecules.forEach(molecule => {
        //update values from GUI
        molecule.updateVals(params.speedX, params.speedY, params.radius, params.speedX, params.speedY)
        molecule.move();
        molecule.render();
    });
    howManyold = params.howMany;
}

//keyboard press - F1 to show/hide
function keyPressed() {
    switch(key) {
      case 'p':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }