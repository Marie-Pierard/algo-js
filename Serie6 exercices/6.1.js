/*Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position 
of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/
class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset; 
    }
    get surface() {
        return Math.PI * this.radius * this.radius; /*voir https://www.w3resource.com/javascript-exercises/javascript-object-exercise-9.php*/    
    }
}

/*Test*/
let circleTest = new Circle(3, 5, 8);
console.log(circleTest.xPos+" "+circleTest.yPos+" "+circleTest.radius);
console.log(circleTest.surface); 
circleTest.move(2, -1);
console.log(circleTest.xPos+" "+circleTest.yPos+" "+circleTest.radius);
console.log(circleTest.surface); 