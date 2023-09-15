const circle = {
  radius: 0,
  area: 0,
  set setRadius(value) {
    this.radius = value;
  },
  set setArea(value) {
    this.area = value;
  },
};
circle.setRadius = 10;
console.log(circle.radius);
// ============= ANSWER FROM TUTORIALS ============ \\
const circleAns = {
  radius: 1,
  area: 0,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circleAns.area);
