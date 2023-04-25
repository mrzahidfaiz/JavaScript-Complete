// Study Hoisting Topics Concept
// USED for Debugging javascript behaviour (compiler) (full file compile and execute)
// Main Point // JAVASCRIPT ALWAYS TAKE Only DELCAREING (UP means Top of code) FOR COMPILE THE CODE
// Hoisting means pull or Take something up

// var x; // declare
// x = 5; // assign
// console.log(x); // called

// _______

// var x; // we declare variable at top 
// // x = undefine // JS compiler assign undefine itself
// console.log(x); // Output is undefine
// x = 3; // cannot read by compiler
// ________

// [var = x] variable delcartion always hoist up by compiler of js

// x = 3; // assign 1st 
// console.log(x); // called
// var x; // declare
// // Because Compiler Check for variable is declare or not


// ________
// only delcartion hoist up not var x = 7;
// being Claver in this case

// console.log(y);
// var y = 10; // undefine

// Definition
// hoisting is javascript default behaviour 
// move in current block_Scope (global / local)


// with Let and const -------------------------------------------

// [let x] is hoist to up but not declared as undefine by compiler
// Uncaught ReferenceError: Cannot access 'x' before initialization
 

// console.log(x);
// let x;
// x = 7; 

// Strict Mode
// auto delcare [BUT GIVE ERRORS In FUTURE] now we use Strict Mode
// as [ var x] // var is delcare by compiler itself
// x = 4;
// console.log(x); // 4

// With Strick Mode

"use strict"
//now give error that x is not define

// x = 4;
// console.log(x);



// More Advanced Example


// var x = 3;

// function getName(){
//     console.log("Muhammad Zahid");
// }

// getName(); //invoked
// console.log(x); // Every Thing Works Fine

// Lets Check Again



// getName();  // invoked before create it
// console.log(x); // invoked before create it


// var x = 3; // x = undefined by compailer itself 

// function getName(){
//     console.log('Muhammad ZAhid')
// }


getName();  // invoked before create it
console.log(x); // invoked before create it // Now it is x is not defined




function getName(){
    console.log('Muhammad ZAhid')
}
