/**
 * set the accessibility of properies and methods in a class
 * 
 * public, private and protected
 * 
 * public
 * The members of the class can be accessed anywhere without any restrictions
 * 
 * 
 */
// class Employee{

//      public name: string;
        
//      constructor(name:string){
//         this.name = name;
//      }
//      public displayInfo():string{
//         return `Name: ${this.name}`;
//     }
// }
// const emp1 = new Employee("Kesav");
// console.log(emp1.name); //Accessible from anywhere
// console.log(emp1.displayInfo()); //Accessible
// const emp2 = new Employee("Asit");
// console.log(emp2.name); //Accessible from anywhere
// console.log(emp2.displayInfo()); //Accessible

/**
 * Private
 * members of the class are not visible outside the class
 */

/*class Employee{
    private salary: number;

    constructor(salary:number){
        this.salary = salary;
    }
    getSalary():string{
        return `Salary: ${this.salary}`
    }

}
const emp = new Employee(50000);
//console.log(emp.salary); 
console.log(emp.getSalary());*/

/**
 * Protected
 * You can access the protected propert within the derived or subclasses
 */
class Employee{
    protected salary: number;

    constructor(salary:number){
        this.salary = salary;
    }
    getSalary():string{
        return `Salary: ${this.salary}`
    }
}
class Manager extends Employee{

    displaySalary():string{

        return `Manager Salary: ${this.salary}`

    }
}

const mgr = new Manager(50000);
//console.log(mgr.salary); 
console.log(mgr.displaySalary());//Accessible

