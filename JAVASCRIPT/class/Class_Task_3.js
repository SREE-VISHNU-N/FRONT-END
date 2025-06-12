/* Class Circle
Property: radius
Method: area() which returns the area (use Math.PI and formula: π * r²) */

class Circle{
    constructor(radius){
        this.radius=radius;
    }

    area(){
        return `Area of circle is ${Math.PI*this.radius**2}`
    }
}

let circle1=new Circle(5);
console.log(circle1.area());