var bandes = [];
var ouvert = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  let x = width / 2;
  let y = height / 2;

  bandes.push({
    x: x,
    y: y,
    angle: -0.1,
    texte: "click on me",
    bouge: false,
  });
}

function draw() {
  background(255);

  for (let i = 0; i < bandes.length; i++) {
    let b = bandes[i];

    if (b.bouge == true) {
      b.x = b.x + b.vx;
      b.y = b.y + b.vy;

      b.angle = b.angle + b.va;
    }

    drawBande(b.x, b.y, b.angle, b.texte);
  }
}

function drawBande(x, y, a, texte) {
  push();

  translate(x, y);

  rotate(a);

  noStroke();

  fill(255, 35, 150);

  rect(0, 0, 260, 55);

  fill(0);

  textSize(32);

  text(texte, 0, 0);

  pop();
}

function mouseClicked() {
  if (ouvert == false) {
    ouvert = true;

    for (let i = 0; i < 45; i++) {
      let vitesseX = random(-12, 12);
      let vitesseY = random(-12, 12);

      bandes.push({
        x: width / 2,
        y: height / 2,

        angle: random(-PI, PI),

        texte: "love",

        bouge: true,

        vx: vitesseX,
        vy: vitesseY,

        va: random(-0.12, 0.12),
      });
    }
  }
}

function keyPressed() {
  if (key === "x") {
    bandes = [];

    ouvert = false;

    bandes.push({
      x: width / 2,
      y: height / 2,

      angle: -0.1,

      texte: "click on me",

      bouge: false,
    });
  }

  if (key === "s") {
    save("bandes.png");
  }
}
