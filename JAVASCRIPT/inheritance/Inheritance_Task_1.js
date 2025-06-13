/* Task 1: Simple Inheritance
Create a class Animal with method makeSound(). 
Then extend it with Dog class and call makeSound() using Dog object. */


class Animal{
    makeSound(){
        console.log('Animal makes sound');
    }
}
class Dog extends Animal{
    
}

let animal1=new Dog();
animal1.makeSound()