/**
 * What is a class?
 * Blueprint for creating your objects 
 * Eg., Car
 * Instance of the class - derive from that particular class
 * Eg., Toyota, Audi, Honda
 * Class{
 *  properties - information regarding the objects created from the class
 *  Eg., brandName, model, color, make
 * myCar - brandName = Toyota, model = 2020, color = blue, 
 * yourCar - brandName = Honda, model - city 2021, color = white
 *  methods - actions performed by the class
 * drivingMode(), parking(), isAutomatic()
 * }
 * 
 * 
 */
// class Car{

//     color:string;
//     model: string;

//     public isAutomatic(){

        
        
//     }

//     public drivingMode(){


//     }
// }
// //You need an object to use the properties and the methods defined in the class
// const myCar = new Car(); 
// //Syntax: const objectName = new className();
// myCar.isAutomatic();
// myCar.drivingMode();
// myCar.color = "blue";
// myCar.model;
// const yourCar = new Car();
// yourCar.color = "white";
// yourCar.isAutomatic();
//myCar and yourCar are the instances  of the Car class
/**
 * Constructor
 * 
 * initial setup for a new object
 * 
 */

class Car{

    color:string;
    model: string;

    constructor(color:string, model: string){
        this.color = color;
        this.model = model;
    }
}
const myCar = new Car("blue", "Audi");
const yourCar = new Car("white", "Toyota");
const saiCar = new Car("brown", "Honda");

/**
 * Types of Constructor
 * 1. Default Constructor
 * 
 *class Car{
    color
    model

 }
 const myCar = new Car(); //No arguments
 myCar.color = "blue";
 * 2. Parameterized Constructor
 class Car{

    color:string;
    model: string;

    constructor(color:string, model: string){
        this.color = color;
        this.model = model;
    }
}
const myCar = new Car("blue", "Audi"); //Parameterized Constructor
 constructor can have arguments --> enable you to set initial values for the properties
const yourCar = new Car("white", "Toyota");
const saiCar = new Car("brown", "Honda");

3. Constructor with default values

 constructor(color: string = "blue", model: string = "Audi"){
    this.color = color;
    this.model = model;
 }

 const myCar = new Car();
 * 
 * 
 */

