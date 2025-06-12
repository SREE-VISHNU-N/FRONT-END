/* Class Temperature
Property: celsius
Method: toFahrenheit() which converts and returns temperature in Fahrenheit. */

class Temperature{
    constructor(celsius){
        this.celsius=celsius;
    }
    toFahrenheit(){
        return `Temperature in Fahrenheit : ${(this.celsius*9/5)+32}`
    }
}

let temp1=new Temperature(25);
console.log(temp1.toFahrenheit());