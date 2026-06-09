var angle = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(245);

  fill(255);
  stroke(0);
  strokeWeight(5);

  beginShape();
  vertex(100, 250);
  quadraticVertex(250, 140, 400, 250);
  quadraticVertex(250, 360, 100, 250);
  endShape(CLOSE);

  drawingContext.save();

  drawingContext.beginPath();
  drawingContext.arc(250, 250, 35, 0, TWO_PI);
  drawingContext.clip();

  push();

  translate(250, 250);
  rotate(angle);

  noFill();
  stroke(0);
  strokeWeight(2);

  beginShape();

  for (let a = 0; a < TWO_PI * 14; a += 0.08) {
    let r = a * 0.6;

    let x = cos(a) * r;
    let y = sin(a) * r;

    vertex(x, y);
  }

  endShape();

  pop();

  drawingContext.restore();

  noFill();
  stroke(0);
  strokeWeight(4);
  circle(250, 250, 70);

  fill(0);
  noStroke();
  circle(250, 250, 10);

  angle += 0.03;
}