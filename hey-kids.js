var lettres = [];
var mot = "Hey kids let's code";
var force = 50;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  let texteSize = width / 12;
  texteSize = min(texteSize, height / 4);

  textSize(texteSize);

  let startX = width / 2 - textWidth(mot) / 2;

  for (let i = 0; i < mot.length; i++) {
    lettres.push({
      lettre: mot[i],
      x: startX + textWidth(mot.substring(0, i)) + textWidth(mot[i]) / 2,
      y: height / 2,
      baseX: startX + textWidth(mot.substring(0, i)) + textWidth(mot[i]) / 2,
      baseY: height / 2,
      taille: texteSize
    });
  }

  background(245);
}

function draw() {
  background(245);

  for (let i = 0; i < lettres.length; i++) {
    let l = lettres[i];

    let d = dist(mouseX, mouseY, l.x, l.y);

    if (d < force) {
      l.x = l.x + ((mouseX - l.x) / 12);
      l.y = l.y + ((mouseY - l.y) / 12);
    } else {
      l.x = l.x + ((l.baseX - l.x) / 15);
      l.y = l.y + ((l.baseY - l.y) / 15);
    }

    fill(30);
    noStroke();
    textSize(l.taille);
    text(l.lettre, l.x, l.y);
  }
}

function mouseClicked() {
  force = random(40, 70);
}

function keyPressed() {
  if (key === "s") {
    save("aimant.png");
  }

  if (key === "x") {
    force = 50;

    for (let i = 0; i < lettres.length; i++) {
      lettres[i].x = lettres[i].baseX;
      lettres[i].y = lettres[i].baseY;
    }
  }
}