let vinyl;
let angle = 0;

function preload() {
  vinyl = loadImage("atlentic-records.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  rotate(angle);

  image(vinyl, 0, 0, 500, 500);

  angle += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}