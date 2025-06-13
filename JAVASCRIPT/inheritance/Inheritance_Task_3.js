/* Task 3: Add Child-only Method
Class Vehicle has method start(). Class Car extends Vehicle, 
adds method drive(). Create object of Car and call both methods. */


class Vehicle{
    start(){
        console.log('Vehicle is starting');
    }
}
class Car extends Vehicle{
    drive(){
        console.log('Car is driving');
    }
}
let car1=new Car();
car1.start();
car1.drive();