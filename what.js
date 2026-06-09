let taille1 = 60;
let taille2 = 60;
let taille3 = 60;
let taille4 = 60;

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

}

function draw() {

  background(245);

  let centreX = width / 2;
  let centreY = height / 2;

  if (mouseX > centreX - 210 && mouseX < centreX - 110 && mouseY > centreY - 50 && mouseY < centreY + 50) {
    taille1 = taille1 + ((120 - taille1) / 8);
  } else {
    taille1 = taille1 + ((60 - taille1) / 8);
  }

  if (mouseX > centreX - 100 && mouseX < centreX && mouseY > centreY - 50 && mouseY < centreY + 50) {
    taille2 = taille2 + ((120 - taille2) / 8);
  } else {
    taille2 = taille2 + ((60 - taille2) / 8);
  }

  if (mouseX > centreX + 10 && mouseX < centreX + 110 && mouseY > centreY - 50 && mouseY < centreY + 50) {
    taille3 = taille3 + ((120 - taille3) / 8);
  } else {
    taille3 = taille3 + ((60 - taille3) / 8);
  }

  if (mouseX > centreX + 120 && mouseX < centreX + 220 && mouseY > centreY - 50 && mouseY < centreY + 50) {
    taille4 = taille4 + ((120 - taille4) / 8);
  } else {
    taille4 = taille4 + ((60 - taille4) / 8);
  }

  fill(0);
  noStroke();

  textSize(taille1);
  text("W", centreX - 160, centreY);

  textSize(taille2);
  text("H", centreX - 50, centreY);

  textSize(taille3);
  text("A", centreX + 60, centreY);

  textSize(taille4);
  text("T", centreX + 170, centreY);

}

function keyPressed() {

  if (key == "s") {

    save("what.png");

  }

}