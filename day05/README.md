# Introduction of TypeScript

 - Microsoft
 - superset of JavaScript
 - TS is the ES6 version of JS with some additional features

# Command to install TypeScript

 - npm install typescript
 - npm install -g typescript

# Command to check tsc version

    tsc -version / tsc -v

You will get an error related to PowerShell's script execution policy. PowerShell has a security feature that prevents the execution of scripts for security reasons.

To resolve this issue, you can change the execution policy for the current session or for the entire system. Follow these steps:

1. Open PowerShell as Administrator:
   Right-click on the PowerShell icon and choose "Run as Administrator" to ensure that you have the necessary permissions to change the execution policy.

2. Check Current Execution Policy:
   Run the following command to check the current execution policy: Get-ExecutionPolicy   

3. Change Execution Policy:
   If the policy is set to "Restricted" or a more restrictive setting, you can change it. For example, to set the execution policy to "RemoteSigned" for the current user, run:
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

 4. Confirm Change:
   You may be prompted to confirm the change. Type 'Y' and press Enter.

5. Retry the Command:
   After changing the execution policy, try running your tsc --version command again.

# TS Compiler

 TS file (.ts) --> TSC --> compiled to JS (.js)

 TS language --> transcompiled (compilation) --> TS Compiler (tsc)
 JS language --> scripting language (no compilation)

*Steps to execute your TS file*
 1. tsc filename
 2. node filename

*Overview of TypeScript*

1. Static typing - catch errors during compilation

JS - dynamically typed

2. Class based Object Oriented Programming
  
   - can use classes, interfaces, inheritance, and other OO concepts

3. Type Inference - TSC can guess what type of data you are working with

4. Access to JS libraries & Frameworks

    Type definition --> .d.ts files

5. Advanced types - enums, union types, tuples

*Advantages of TS*

1. Catches error early (compile time) - type safety
2. Easier to manage large projects

*Limitations:*

1. Slows down coding a bit
2. Needs compiling - extra step

*Command to install TypeScript*

npm install -g typescript --> global installation
npm install typescript --> local installation
         nodule modues, package.json

# tsconfig.json

tsc --init --> creates TS config file

- target - ECMA script version 
- module - defines the module system used in your project - commonJS, ESModule
- strict - type checking
- outDir - sets the output directory for the compiled JS files
- include & exclude 

# TS Types

Basic Types:

   1. number
   2. string 
   3. boolean

Arrays

   number[]
   generic array types --> Array<string>

Enum  - organize a collection of related values

any - flexible variable type

void - absence of having any type

null and undefined


# Variables in TS

Naming convention

- Identifier - seq of letters, digits
- no reserved keywords (if, while, for)
- descriptive meaningful name
- camelCase eg., userName

*Syntax*

let variableName: type = value;

# TS Annotations

--> explicitly mentioning the types of variables or functions

string, boolean, number, null, undefined

Union  --> allows a variable to be one of several types.
            Use the '|' --> combining the types


Intersection --> combine multiple types into one --> &

# Object literal

- collection of key-value pairs --> properties

*Syntax*

let objectName:{key1: type1, key2: type2,..} =
{
   key1: value1,
   key2: value2
};

To access the properties of the object
1. Using dot notation
2. Using square brackets








