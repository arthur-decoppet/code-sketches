let posX = 200;
let posY = 200;
let posR = 200;
let posV = 200;

let size = 20;

let vitX = 3.678;
let vitY = 5.456;
let vitR = 1;
let vitV = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  
  stroke(123, 116, 234);
  fill(posR, posV, 234);
  
  posR += vitR;
  if (posR >= 255|| posR <= 3) {
    vitR = vitR * -1;
  }
    posV += vitV;
  if (posV >= 255|| posV <= 0) {
    vitV = vitV * -1;
  }
  
    posX += vitX;
    posY += vitY;
  
  if( posX >= width-size ||  posX <= 0 ){
   vitX = vitX * -1
  }
  if( posY >= height-size ||  posY <= 0 ){
   vitY = vitY * -1
  }

  square(posX, posY, size);
}