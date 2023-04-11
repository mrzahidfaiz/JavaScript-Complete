// Recursion in JS

// Function repeat itself by calling one time is called Recursion
// Recursion must be used with if else statement to avoid infinite function calling

// Real World Example (RUSSIAN Matryoskha Dolls)

    /*function proccessDoll(doll){
        // 1) BASE CASE (conditions)
        if( found the piece of Chocolate)
        return "yum yum"
        // 2) Recursive call of itself
        else if(there are no more dolls)
        return "No Chocolate Here"
        else{
            proccessDoll(the smaller doll)
        }
    }*/

// without condition
// function abc(){
//     abc();
// }
// abc();
// caught RangeError: Maximum call stack size exceeded
 
// Example  -----------------
// function abc(num){
//     if(num === 0){
//         return 1
//     } else {
//         return num * abc(num -1);
//     }
// }
// console.log(abc(5));


// Self Practice
function factorial(num){
    // 1) Base Case
    if( num == 1 || num == 0){
        return 1
    } else {
    // 2) Recursion 
        return num * factorial(num - 1)
    }
}

console.log(factorial(4)); //24

/* ________HOW Its works__________

    num * factorial(num - 1)
    4 * factorial(4 - 1) // 3  // 24^
    3 * factorial(3 - 1) // 2  //6^
    2 * factorial(2 - 1) // 1 // 2^
    when reach to 1 then if(num == 1) // runs
*/