// Enumerating Properties

// Sometimes I need to iterate or enumarte properties in an object

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log('draw');
    };
  }
  
  const circle = new Circle(10)
  
  // I can iterate it by using the for in loop
  
  for (let key in circle) {
      if (typeof circle[key] !== 'function')
      // If I want to get the values of keys I can use the bracket notation
      console.log(key, circle[key]);
  }
  
  // There is another approach to get all the keys of an object and it returns them as an array
  const keys = Object.keys(circle)
  
  console.log(keys);
  
  // Sometimes I want to know if an object has a give property or a method, I can use the in operator to check
  if ('radius' in circle)
      console.log('Circle has a radius');