function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);
  for (let cnt = 0; cnt < l; cnt++) {
    print(cnt);
    line(c, -c, r, 0);
    line(c, c, r, 0);
    rotate(360 / l);
  }
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {}

function mouseClicked() {
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  noFill();
  let sqarec = random(["d6001a", "eb0f64", "fc1ba2"]);
  let starc = random(["#f5e400", "#f5bf1d", "#f4f568"]);
  let circlec = random(["1b66f7", "31a4fc", "12c0eb"]);

  let rn = random(0, 8);
  print(rn);

  if (rn < 2) {
    //GENERATE RANDOM GRID OF SQUARES
    for (y = 0; y < height; y += pitch) {
      for (x = 0; x < width; x += pitch) {
        let dd = random(sqDim / 8, sqDim * 2);
        stroke(sqarec); //color squares random red
        rect(x, y, dd);
      }
    }
  } else if (rn < 5) {
    // GENERATE RANDOM GRID OF STARS
    for (y = 0; y < height; y += pitch) {
      for (x = 0; x < width; x += pitch) {
        let dd = random(sqDim / 8, sqDim * 2);
        stroke(starc); //color stars random yellow
        star(x, y, dd, 10, 4);
      }
    }
  } else {
    //GENERATE RANDOM GRID OF CIRCLES
    for (y = 0; y < height; y += pitch) {
      for (x = 0; x < width; x += pitch) {
        let dd = random(sqDim / 8, sqDim * 2);
        stroke(circlec); //color circles random blue
        ellipse(x, y, dd);
      }
    }
  }
}
