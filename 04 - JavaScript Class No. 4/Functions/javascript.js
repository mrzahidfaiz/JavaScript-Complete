// Function 

// Declaring a Function

// function nameOfFunction(){
//     // Function body
// }


// __________ Example
// // program to print a text
// function greet(){
//     console.log("Muhammad Zahid Faiz")
// }
// // function call
// greet(); // Muhammad Zahid Faiz
// greet();
// greet();

// Function Parameters __________________ //
// User is  Parameter
// Muhammad Zahid is Argument


// function greet(user){
//     console.log("Hello"+ " " + user )
// }

// greet("Muhammad Zahid") //

/// Advance Example 

// let username = prompt("Enter Name Here!")

// function greet(username){
//     document.write("AOA!" + " " + username);
// }

// greet(username);

// Recursion --------------------------------------------------------------

function factorial(num){
    if (num > 1){
        console.log(num)
    return num * factorial(num - 1);
    
}
return 1
}


console.log(factorial(5));
// 5 * 4 *3 *2 *1