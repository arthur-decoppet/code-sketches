var size = 20;

var r = 255;
var g = 0;
var b = 100;

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(255);

}

function draw() {

  noFill();

  stroke(r, g, b);

  strokeWeight(2);

  circle(mouseX, mouseY, size);

  size = size + 2;

  if (size > 120) {

    size = 20;

  }

}

function mouseClicked() {

  r = random(255);
  g = random(255);
  b = random(255);

}

function keyPressed() {

  if (key == "x") {

    background(255);

  }

  if (key == "s") {

    save("cercles.png");

  }

}