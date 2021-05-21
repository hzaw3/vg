class E {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = random(0, 30);
    this.r = 250;
    this.b = 250;
    this.g = 250;
  }

  move() {
    if (this.y <= height) {
      // this.y =this.y+3;
      //   shorthand += mean =this.y+3
      this.y += 2.5;
    } else {
      this.y = 0;
    }


  }
  display() {
    fill(this.r, this.b, this.g);
    ellipse(this.x, this.y, this.d, this.d);
  }
}