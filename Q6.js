// Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6

//Prototypes is a functionality in JS, which gives JS the concept on inheritence. Prototype features are used to add added functionalities and methods to the constructor of an object. 

// Prototype is an object which the object uses to inherit propeties from. 
// beacuse prototype is an object we can use prototype to add custom methods and properties.
// so that all the instances of that object can have same propeties and methods.



var Car = function(name, color){
    this.name =  name;
    this.color = color;
}

Car.prototype.wheels = 4;

Car.prototype.getDetails = function(){
    console.log("Car "+this.name +" has a color "+ this.color + " and has " + this.wheels +"wheels");
}

var car1 = new Car("Amaze", "silver");