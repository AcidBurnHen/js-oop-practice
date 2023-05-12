// Abstraction using private properties and methods

// Abstraction is a concept of OOP that focuses on hiding details and complexity and
// only showing the essentials

// Instead of using this keyword I can use let instead which will hide select properties and methods
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumeLocation = function (factor) {
    // ...
  };
  this.draw = function () {
    computeOptimumeLocation(0.1);
    console.log('draw');
  };
}

const circle = new Circle(10);
