import { TestReporter  } from "./05-testReporter";

class ConsoleReporter extends TestReporter{

    start(): void {
       console.log("Test reporting started");
       
    }
    reportTest(testName: string, result: string): void {
       console.log(`Test: ${testName}, Result: ${result}`);
       
    }
    end(): void {
        console.log("Test reporting closed");
        
    }

}
const reporter = new ConsoleReporter();
reporter.start();
reporter.reportTest("LoginTest", "Passed");
reporter.reportTest("SignUpTest", "Failed");
reporter.end();

/**
 * import * as fs from 'fs';

class FileReporter extends TestReporter {
    private fileStream: fs.WriteStream;

    constructor(filename: string) {
        super();
        this.fileStream = fs.createWriteStream(filename);
    }

    start(): void {
        this.fileStream.write("Test reporting started.\n");
    }

    reportTest(testName: string, result: string): void {
        this.fileStream.write(Test: ${testName}, Result: ${result}\n);
    }

    end(): void {
        this.fileStream.write("Test reporting ended.\n");
        this.fileStream.close();
    }
}
let reporter: TestReporter;
// Decide which reporter to use
// reporter = new ConsoleReporter();
reporter = new FileReporter("test-results.txt");

// Using the reporter
reporter.start();
reporter.reportTest("LoginTest", "Passed");
reporter.reportTest("SignUpTest", "Failed");
reporter.end();
 */