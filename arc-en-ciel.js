let rougeX;
let rougeY;

let orangeX;
let orangeY;

let jauneX;
let jauneY;

let vertX;
let vertY;

let bleuX;
let bleuY;

function setup() {

  createCanvas(windowWidth, windowHeight);

  rougeX = width / 2;
  rougeY = height / 2;

  orangeX = width / 2;
  orangeY = height / 2;

  jauneX = width / 2;
  jauneY = height / 2;

  vertX = width / 2;
  vertY = height / 2;

  bleuX = width / 2;
  bleuY = height / 2;

}

function draw() {

  background(255);

  rougeX = rougeX + ((mouseX - rougeX) / 10);
  rougeY = rougeY + ((mouseY - rougeY) / 10);

  orangeX = orangeX + ((rougeX - orangeX) / 10);
  orangeY = orangeY + ((rougeY - orangeY) / 10);

  jauneX = jauneX + ((orangeX - jauneX) / 10);
  jauneY = jauneY + ((orangeY - jauneY) / 10);

  vertX = vertX + ((jauneX - vertX) / 10);
  vertY = vertY + ((jauneY - vertY) / 10);

  bleuX = bleuX + ((vertX - bleuX) / 10);
  bleuY = bleuY + ((vertY - bleuY) / 10);

  noStroke();

  fill(255, 0, 0);
  circle(rougeX, rougeY, 60);

  fill(255, 140, 0);
  circle(orangeX, orangeY, 60);

  fill(255, 220, 0);
  circle(jauneX, jauneY, 60);

  fill(0, 200, 80);
  circle(vertX, vertY, 60);

  fill(0, 120, 255);
  circle(bleuX, bleuY, 60);

}

function keyPressed() {

  if (key == "s") {

    save("arcenciel.png");

  }

}