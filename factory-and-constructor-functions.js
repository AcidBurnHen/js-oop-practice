// Factory function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
          console.log('draw');
        },
      };
}

const circle = createCircle(1);

// Constructor functions

function Circle(radius) {;
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
} 

// When I use "this" inside of a constructor function and want to make a new object with it, I need to use
// new as this will create a new empty object, if this is not used, "this" will point to the windo object

const newcircle = new Circle(1)