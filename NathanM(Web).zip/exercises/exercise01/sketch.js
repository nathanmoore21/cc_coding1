let myArrow,dy,dx;

//create canvas
function setup() {
    createCanvas(710, 400);
    myArrow = new Arrow(width/2,height/2,0);
  }

  function draw() {
    background(160, 219, 219);
      myArrow.updateValues();
      myArrow.drawArrow();
  }