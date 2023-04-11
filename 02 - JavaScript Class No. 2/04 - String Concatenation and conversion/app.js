// - String Concatenation and conversion

// Practical Example

let fisrtName = "Muhammad Zahid ";
let lastName = "Faiz";

// String Concatenation
let fullname = fisrtName + lastName;

// This is Example of Concatenation

// Console.log not distrube the UI of the Application and use can get Result of the output on console side
console.log(fullname);

// 2nd Approach

// num + num = addition
// num + string = Concatenation
// string + num = Concatenation
// string + string = Concatenation

//let number1 = "5";
let number1 = 5;
let number2 = 5;
let numbers = number1 + number2;
console.log(numbers);
// NOTE!:
// this Example not Concatenate the Output simply sum to numbers
// Concatenation is only possible if number1 is ===== let number1 = "5"; string

// _______________________________________________________ //

let data = "Hello Students"
//let data2 = data.includes("H") // CaseSenstive ("h")
let data2 = data.includes("Students")
console.log(data2);

// _______________________________________________________ //

// Convert Number to String

let num1 = "5";
let num2 = 5;
// console.log(num1 + num2); direct call the function withOut Storing in to variable i.e, let nums = num1 + num2
// console.log(num1 + num2);

// method 1
console.log("Method 1:", +num1 + num2)

// Method 2
console.log( "Method 2:", parseInt(num1) + num2)

// Method 3
console.log( "Method 3:", Number(num1) + num2)


// Math Operators = + - * / %

console.log("-Mins Approach!", num1 - num2)
console.log("*Multiple Approach!", num1 * num2)
console.log("/Divide Approach!", num1 / num2)
console.log("%Reminder Approach!", num1 % num2) // Modulus   num1 10 % num2 3 reminder 1