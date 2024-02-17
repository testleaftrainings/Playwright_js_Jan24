/**
 * Inheritance - where a class (child/derived class)inherits the properties and behaviors from
 * another class (parent/base class)
 * 
 * Type:
 * 1. Single Inheritance
 * a class inherits from one parent class
 * 
 *     1 Parent Class
 *          | extends
 *      Child Class
 * 
 * 2. Multilevel Inheritance
 * chain of inheritance where a class inherits from another class which in turn inherits from another 
 * class
 *      class grandParent{
 *      
 * }
 *  class Parent extends grandParent{
 * 
 * }
 * 
 * class Child extends Parent{
 * 
 * }
 * 3. Multiple Inheritance
 * a class inherits from more than one parent class. {interface --> you can achieve multiple
 * inheritance}
 *   Parent A    Parent B
 * 
 *          Child
 * interface Browser
 * 
 * interface Element
 * 
 * class LaunchApp extends abstractClass implements Browser
 * 
 * 4. Hierarchial Inheritance
 * Multiple classes inherit from a single parent class
 * parent class
 * ChildClass1   
 * childClass2
 * class testReporter {
 * 
 * }
 * class ConsoleReporter extends testReporter{
 * 
 * 
 * }
 * class FileReporter extends testReporter{
 * 
 * }
 * 
 * 5. Hybrid Inheritance
 * A mix of two or more types of inheritance
 * 
 * 
 */
import { chromium, Page, Browser } from "playwright";
export class BaseTest{

    browser:Browser;
    page:Page;

    async setup(){

        this.browser = await chromium.launch({headless:false});
        this.page = await this.browser.newPage();

    }
    async teardown(){

            await this.page.close();
            await this.browser.close();
       
    }
}

/**
 * 
 * class LaunchApp extends BaseTest{
 * 
 * }
 * 
 * interface A
 * 
 * interface B
 * 
 * interface B extends interface A
 * 
 * class C implements interface B
 * 
 * 
 * 
 */
