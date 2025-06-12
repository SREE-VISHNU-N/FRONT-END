/* Create a class called Car

Properties: brand, model

Method: getDetails() returns string like "Brand: Toyota, Model: Fortuner" */
 
class Car{

    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }

    getdetails(){
       return `Brand: ${this.brand}, Model: ${this.model}`
    }
}

let car1= new Car('Toyota','Fortuner');
console.log(car1.getdetails());