// Problem in Prompt

// let favNum = prompt("Enter a Number ");

// console.log(typeof favNum); // Type of Prompt is String and we enter a number

// ______________________________________ //

// let favNum = prompt("Enter a Number"); // Number //praseInt //+
// // we Must Convert the string into Number

// console.log("Before Conversion", typeof favNum);
// console.log("Convert String to Number", typeof +favNum);

// _______________Comparison Operators_______________________ //

// Comparison Operators
// == , ===
// == not check data type //console.log( 5 == "5")
// === always check datatype along

// console.log( 5 == "5") //true
// console.log( 5 === "5") // false

// != , !== // Not Equal

// console.log( 5 != "5") //false
// console.log( 5 !== "5") // true

// <, >, <=, >=

// let num1 = 5;
// let num2 = 10;
// console.log(num1 > num2);

// Examples

// let user1Age = 18;
// let user2Age = 16;
// console.log(user1Age >= 18); //true

// _______________IF ELSE_______________________ //

// let user1Age = +prompt("Enter Your age");

// if (user1Age >= 18) {
//   console.log("You Can apply for NIC");
// } else {
//   console.log("You Cannot apply for NIC");
// }


// ___________ 2nd Approach 

// let favNum = +prompt("Enter a number")
// let randomNumber = Math.round(Math.random() * 10);

// if (favNum === randomNumber){
//     console.log("You Win");
// }else
// {
//     console.log("You Lose" + randomNumber)
// }
// ___________ 3rd Approach

// let num = +prompt("Enter a Number")
// //check if the number is even
// let result = num % 2;

// if( result === 0){
//     console.log("Number is Even");
// }
// else
// {
//     console.log("Number is Odd");
// }

// ___________ Next

// For on it later



// ___________ For Loop ________________ //
 
//  (initialExpression; condition; updateExpression/ Increment) {
//     // for loop body
// }


// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let userInput = +prompt("Enter a Number");

// for (let i = 1; i <= userInput; i++){
//     document.write("<br>")
//     document.write(i)
// }

let userInput = +prompt("Enter a Table Number");

for (let i = 1; i <= userInput; i++){
    document.write("<br>")
    document.write(userInput + " X " + i + " = " + i*userInput)
}