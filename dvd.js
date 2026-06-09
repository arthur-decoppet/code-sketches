let posX = 200;
let posY = 200;

let taille = 70;

let vitX = 2.2;
let vitY = 2.2;

let rouge = 255;
let vert = 255;
let bleu = 255;

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);

  textStyle(BOLD);

}

function draw() {

  background(0);

  let largeurDVD = taille * 2.2;
  let hauteurDVD = taille * 0.8;

  posX = posX + vitX;
  posY = posY + vitY;

  if (
    posX + largeurDVD / 2 > width ||
    posX - largeurDVD / 2 < 0
  ) {

    vitX = vitX * -1;

    rouge = random(50, 255);
    vert = random(50, 255);
    bleu = random(50, 255);

  }

  if (
    posY + hauteurDVD / 2 > height ||
    posY - hauteurDVD / 2 < 0
  ) {

    vitY = vitY * -1;

    rouge = random(50, 255);
    vert = random(50, 255);
    bleu = random(50, 255);

  }

  fill(rouge, vert, bleu);

  noStroke();

  let tailleTexte = taille;

  textSize(tailleTexte);

  text(
    "DVD",
    posX,
    posY
  );

}

function keyPressed() {

  if (key == "s") {

    save("dvd.png");

  }

}