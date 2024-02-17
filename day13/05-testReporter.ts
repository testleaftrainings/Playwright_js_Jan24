/**
 * Abstraction
 * complex detailsare hidden and only the necessary and relevant features are exposed
 * 1. Interface - 100% abstraction
 * 2. -abstract class - Partial abstraction (implemented & unimplemented methods)
 * implemented method --> startReport(){
 *  console.log("Hi");
 * }
 * 
 * endReport(); unimplemented method
 */

export abstract class TestReporter{

    abstract start():void;

    startTracing(){

        console.log("Tracing is started");
        
    }
    abstract reportTest(testName: string, result:string):void;

    abstract end():void;
}
//You cannot create an object for an abstract class and an Interface
//const rep = new TestReporter();