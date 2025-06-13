/*  Task 5: Multi-level Behavior
Create class ElectronicDevice with method powerOn(). 
Extend it with Phone, then further extend Smartphone from Phone. 
Add one method in each and call all from Smartphone object. */

class ElectronicDevice {
    poweron() {
        console.log('Device is powered on');
    }
}
class Phone extends ElectronicDevice {
    makecall() {
        console.log('Making a call');
    }
}
class Smartphone extends Phone {
    browseInternet() {
        console.log('Browsing Internet');
    }
}

let smartphone1 = new Smartphone();
smartphone1.poweron();
smartphone1.makecall();
smartphone1.browseInternet();