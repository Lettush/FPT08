// Operators and Expressions

// 1. Arithmetic Operators
let x = 24;
let y = 2;

// Addition, '+'
let sum = x + y;
console.log("The total of x and y is:", sum);

// Substraction, '-'
let difference = x - y;
console.log("The difference of x and y is:", difference);


// Multiplication, '*'
let z = x * y
console.log("Product of x and y:", z)


// Division, "/"
let quotient = x / y
console.log("Division of x and y: ", quotient);


// Remainder or Modulo, '%'
let modulus = x % y
console.log("Division Remainder of x and y: ", modulus);


let answer = ((10 / 2) * 23) + 23;
console.log(answer);


// 2. String Expressions or concatenation
console.log("Hello" + " " + "world!");
let greeting = "Hi";
let userName = "John";
console.log(greeting + " " + userName + "!");

// 3. Comparison Operators

let num1 = 101;
let num2 = 100;

// Equal to (==): This operator checks if two values are equal
console.log("Is it equal?", num1 == num2 );

// Strict equal to(===): This operator checks if two values are equal in both value and type
console.log("Is it equal value and equal type:", num1 === num2);

// Not equal to (!=): This operator checks if two values are not equal
console.log("Are the values not equal?", num1 != num2);

// Greater than (>): This operator checks if the left operand is greater than the right operand
console.log(num1 > num2);

// Less than (<): This operator checks if the left operand is less than the right operand
console.log(num1 < num2);

// Greater than or Equal to (>=): This operator checks if the left operand is greater than or equal to the right operand
console.log("Greater than or Equal to (>=):", num1 >= num2 );


// Less than or Equal to (<=): This operator checks if the left operand is less than or equal to the right operand
console.log("Less than or Equal to (<=):", num1 <= num2 );



// 4. Logical Expressions (&&, ||, !)
let sunny = false;
let warm = true;
console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("Not sunny?", !warm);
