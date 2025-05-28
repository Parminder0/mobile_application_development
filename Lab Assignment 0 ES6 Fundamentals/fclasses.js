class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return this.width * 4;
  }
}

// Test
const sq = new Square(5);
console.log(sq.getArea()); // 25
console.log(sq.getPerimeter()); // 20
