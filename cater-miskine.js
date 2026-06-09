var size = 7;
var ancienX;
var ancienY;

let maskGraphics;
let mot = "CATER"

function setup() {

  frameRate(60)

  createCanvas(windowWidth, windowHeight);

  ancienX = width / 2;
  ancienY = height / 2;

  background(255)

  maskGraphics = createGraphics(width, height);
  maskGraphics.pixelDensity(1);

  maskGraphics.background(0);
  maskGraphics.fill(255);

  maskGraphics.textAlign(CENTER, CENTER);
  maskGraphics.textStyle(BOLD);

  let texteSize = width / 4.5;

  texteSize = min(texteSize, height / 2.5)

  maskGraphics.textSize(texteSize);

  maskGraphics.text(mot, width / 2, height / 2);

}

function draw() {

  ancienX = ancienX + ((mouseX - ancienX) / 8);
  ancienY = ancienY + ((mouseY - ancienY) / 8)

  let c = maskGraphics.get(floor(ancienX), floor(ancienY));

  if (c[0] > 100) {
    drawHeart(ancienX, ancienY, size)
  }
}

function drawHeart(x, y, s) {

  stroke(0)
  strokeWeight(1);

  fill(255,0,80)

  beginShape();

  vertex(x, y);

  bezierVertex(
    x - s,
    y - s,
    x - s * 1.5,
    y + s / 3,
    x,
    y + s
  );

  bezierVertex(
    x + s * 1.5,
    y + s / 3,
    x + s,
    y - s,
    x,
    y
  );

  endShape(CLOSE)
}

function keyPressed(){

  if (key === "s"){
    save("dessin.png")
  }

  if(key === "x"){
    background(255);
  }

}

function mouseClicked(){

  size = random(5,9)

}