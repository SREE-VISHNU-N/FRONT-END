/*  Task 2: Add, Update, and Delete Properties
Start with this object:

let car = {
  brand: "Toyota",
  year: 2020
};
Add a new property color with value "Red".

Update the year to 2023.

Delete the brand property.

Print the final object. */

let car ={

    brand:'Toyota',
    year:2020
}
car['color']='red';
car.year=2023;
delete car.brand

console.log(car)