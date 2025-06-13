/*  Task 4: Method Overriding
Class Shape has method area(), which returns 'Unknown'. 
Class Circle extends Shape and overrides area() to 
return actual area using radius. */
 
class Shape{
    area(){
        console.log('Area is not defined');
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }

    area(){
        let area = 3.14*this.radius*this.radius;
        console.log(`Area of circle is ${area}`);
    }
}

let circle1=new Circle(10);
circle1.area();