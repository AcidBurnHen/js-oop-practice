// Objects

// Objects can have properties and methods

const circle = {
    /* Object properties store values */
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    /* Functions on objects are reffered to as methods */
    draw: function() {
        console.log('draw')
    }
};

// Properties and methods of the object can be accessed using the dot notation.

circle.draw();
console.log(circle.radius);