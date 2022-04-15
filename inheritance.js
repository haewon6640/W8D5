Function.prototype.inherits = function(object) {
    this.prototype = Object.create(object).prototype
    this.prototype.constructor = this
}

function MovingObject () {}
MovingObject.prototype.move = function() {
    console.log("Moving!");
}
function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.swim = function() {
    console.log("Swim");
}
let ship = new Ship();
ship.move();
ship.swim();

console.log(ship.__proto__.constructor)

function Asteroid () {}
Asteroid.inherits(MovingObject);
new Asteroid().move();
new Asteroid().swim();