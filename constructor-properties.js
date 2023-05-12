// Constructor Properties

let x = {};

new String();
new Boolean();
new Number();

// Every object has a constructor property, and that references the function that was used to create an object

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function() {
    console.log('draw')
}
`
);

const circle = new Circle1(1)

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// After creating new object I can manipulate it further
circle.location = {y: 2};

// I can use bracket notation for dynamic properties
const propertyName = "center location";
circle[propertyName] = {x: 1};

// Deleting properties with dot or bracket notation
delete circle.location;
