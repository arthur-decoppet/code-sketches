let locoX;
let locoY;

let wagon1X;
let wagon1Y;

let wagon2X;
let wagon2Y;

let wagon3X;
let wagon3Y;

let wagon4X;
let wagon4Y;

function setup() {

  createCanvas(windowWidth, windowHeight);

  locoX = width / 2;
  locoY = height / 2;

  wagon1X = width / 2;
  wagon1Y = height / 2;

  wagon2X = width / 2;
  wagon2Y = height / 2;

  wagon3X = width / 2;
  wagon3Y = height / 2;

  wagon4X = width / 2;
  wagon4Y = height / 2;

}

function draw() {

  background(240);

  locoX = locoX + ((mouseX - locoX) / 10);
  locoY = locoY + ((mouseY - locoY) / 10);

  wagon1X = wagon1X + ((locoX - wagon1X) / 10);
  wagon1Y = wagon1Y + ((locoY - wagon1Y) / 10);

  wagon2X = wagon2X + ((wagon1X - wagon2X) / 10);
  wagon2Y = wagon2Y + ((wagon1Y - wagon2Y) / 10);

  wagon3X = wagon3X + ((wagon2X - wagon3X) / 10);
  wagon3Y = wagon3Y + ((wagon2Y - wagon3Y) / 10);

  wagon4X = wagon4X + ((wagon3X - wagon4X) / 10);
  wagon4Y = wagon4Y + ((wagon3Y - wagon4Y) / 10);

  rectMode(CENTER);

  fill(220, 60, 60);
  stroke(0);
  rect(locoX, locoY, 70, 50);

  fill(100);

  rect(wagon1X, wagon1Y, 60, 40);
  rect(wagon2X, wagon2Y, 60, 40);
  rect(wagon3X, wagon3Y, 60, 40);
  rect(wagon4X, wagon4Y, 60, 40);

  fill(0);

  circle(locoX - 20, locoY + 25, 12);
  circle(locoX + 20, locoY + 25, 12);

  circle(wagon1X - 15, wagon1Y + 20, 10);
  circle(wagon1X + 15, wagon1Y + 20, 10);

  circle(wagon2X - 15, wagon2Y + 20, 10);
  circle(wagon2X + 15, wagon2Y + 20, 10);

  circle(wagon3X - 15, wagon3Y + 20, 10);
  circle(wagon3X + 15, wagon3Y + 20, 10);

  circle(wagon4X - 15, wagon4Y + 20, 10);
  circle(wagon4X + 15, wagon4Y + 20, 10);

}

function keyPressed() {

  if (key == "s") {

    save("train.png");

  }

}