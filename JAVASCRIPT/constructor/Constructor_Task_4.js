/* Task 5:
Create a constructor called Car.
Each car object should have:
brand (like "Toyota", "Honda")
fuelType (like "Petrol", "Diesel", "Electric")

Steps:
Create 3 car objects using the constructor
Store them in an array
Loop through the array and print only the fuelType */


function Car(brand,fuelType){
    this.brand=brand;
    this.fuelType=fuelType;
}

let car1=new Car('Toyota','Petrol');
let car2=new Car('Honda','Diesel');
let car3=new Car('Susuki','Electric');

let array=[car1,car2,car3];

for(i=0; i<array.length; i++){
    console.log(array[i].fuelType)
}

