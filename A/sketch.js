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

  let rn = random(0, 9);
  print(rn);

  if (rn < 3) {
    //GENERATE RANDOM GRID OF SQUARES
    for (y = 0; y < height; y += pitch) {
      for (x = 0; x < width; x += pitch) {
        let dd = random(sqDim / 8, sqDim * 2);
        let vx = random(-50,50);
        let vy = random(-50,50);
        let squarec = random(["#d6001a", "#eb0f64", "#fc1ba2"]);
        push();
        translate(x,y);
        stroke(squarec); //color squares random red
        rect(vx, vy, dd);
        pop();
      }
    }
  } else if (rn < 6) {
    // GENERATE RANDOM GRID OF STARS
    for (y = 0; y < height; y += pitch) {
      for (x = 0; x < width; x += pitch) {
        let dd = random(sqDim / 8, sqDim * 2);
        let vx = random(-50,50);
        let vy = random(-50,50);
        let starc = random(["#feff00", "#fffe78", "#fcc615"]);
        push();
        translate(x,y);
        stroke(starc); //color stars random yellow
        star(vx, vy, dd, 10, 4);
        pop();
      }
    }
  } else {
    //GENERATE RANDOM GRID OF CIRCLES
    for (y = 0; y < height; y += pitch) {
      for (x = 0; x < width; x += pitch) {
        let dd = random(sqDim / 8, sqDim * 2);
        let vx = random(-50,50);
        let vy = random(-50,50);
        let circlec = random(["#1b66f7", "#31a4fc", "#12c0eb"]);
        push();
        translate(x,y);
        stroke(circlec); //color circles random blue
        ellipse(vx, vy, dd);
        pop();
      }
    }
  }
}
