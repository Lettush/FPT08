console.log("Hello World!");

// Statements: JavaScript code is composed of statements that perform specific actions. Each statement typically ends with a semicolon (;), although it is not always required.
// Comments: You can add comments in JavaScript to provide explanations or make notes within the code. There are two types of comments: single-line comments, starting with //, and multi-line comments, enclosed between /* and */.
// Case sensitivity: JavaScript is case-sensitive, meaning that uppercase and lowercase letters are treated differently. For example, "variable" and "Variable" would be considered as two separate variables.
// Whitespace: JavaScript ignores spaces, tabs, and line breaks (collectively called whitespace) that are not necessary for code execution. However, whitespace can enhance code readability.
// Blocks: Code blocks in JavaScript are enclosed in curly braces ({}) and are used to group statements together. Blocks are often used in control structures like loops and co

// Variables

// Variable - var

// Variables (var / let / const)

if (true) {
    // Variable - var (global scoped variable)
    var firstName = 'Jane';
    console.log(firstName);
}
console.log(firstName);

if (true) {
    // Variable - let (local scope variable)
    let lastName = "Doe";
    console.log(lastName);
}
// console.log(lastName); This will cause an error

// Variable const (fixed / immutable)
const birthdate = "06232000";
console.log(birthdate);
// birthdate = "1212=2000" This will cause an error