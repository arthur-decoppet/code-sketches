let posX = 300;
let posY = 300;

let size = 40;

let vitX = 4.321;
let vitY = 3.789;

let colR = 120;
let colB = 200;

let vitR = 2;
let vitB = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
}

function draw() {

  fill(colR, 50, colB, 40);
  stroke(255);

  circle(posX, posY, size);

  posX += vitX;
  posY += vitY;

  colR += vitR;
  colB += vitB;

  if (colR >= 255 || colR <= 0) {
    vitR = vitR * -1;
  }

  if (colB >= 255 || colB <= 0) {
    vitB = vitB * -1;
  }

  if (posX >= width - size/2 || posX <= size/2) {
    vitX = vitX * -1;
  }

  if (posY >= height - size/2 || posY <= size/2) {
    vitY = vitY * -1;
  }
}