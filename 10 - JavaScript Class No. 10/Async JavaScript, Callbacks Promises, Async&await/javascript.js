/* We have seen both synchronous and asynchronous programs in JavaScript.
So what is javascript synchronous or asynchronous?

In short, JavaScript is synchronous. It is a blocking and single-threaded 
programming language. Means JavaScript can execute only one code block at a time. */

/* Sync Example 
Synchronous programming is the programming in which the program executes 
in the order it is written and only one code block is executed at a time.
synchronous programs are blocking programs (InterView Question) */

// 1st Example
// alert("Next Message in Console print after Click Me!")
// console.log("You Clicked alert");
// console.log("JavaScript is Synchronous Language")

// 2nd Example
// let today = new Date();
// console.log(today);
// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }
// console.log("Hello World!");

// Asynce Example
// Asynchronous programming is the programming that executes in the
// order it is written until some asynchronous operation arrives.
// When an asynchronous operation arrives then some block of code split from the
// program's normal execution and starts executing parallel to other blocks.

// 1st Example
// setTimeout(function(){
//     console.log("I am on Position 1st in code BUT not in execution")
// }, 2000)
// console.log("I am on Position 2nd in Code in execution")

// 2nd Example
// let i = 0;
// setTimeout(() => {
//   console.log("Time out!");
// }, 2000);
// setInterval(() => {
//   console.log(i++);
// }, 1000);
// console.log("Hello World!");

// 1) Program first output is "Hello World!" which is the last line of the code
// 2) Then it outputs the value of 'i' at an interval of 1 second
// 3) And finally, after 2 seconds of the program outputs "Time out!".

// Call Back Function (MicroWave Example) vs Call Back Hell
//  Callback functions are the functions that are passed as an argument to another function.

/* These callback functions can be served both in a synchronous and asynchronous way.
 It depends on the type of task, if there is an asynchronous operation 
 then callback can be used in an asynchronous way. 

For example, you need to fetch a file from the server then in this case you can use the callback function in an asynchronous way to do something once the file is fetched.
*/

// Example of CALLBACK FUNCTION
// function runAfter2Sec(callback) {
//   // msg function store
//   setTimeout(function () {
//     console.log("Done");
//     callback();
//   }, 2000); // callback as execution
// }
// function msg() { // executeWehnDone
//   console.log("Yes! Its Done");
// }
// runAfter2Sec(msg); // function as an Argument
// console.log("Hello Pakistan");


// Example 2

// function runAfter2Sec(callback) {
//     // msg function store
//     setTimeout(function () {
//       let data = 5 + 5;
//       callback(data);
//     }, 2000); // callback as execution
//   }
//   function msg(dataToGet) { // executeWehnDone
//     console.log("Yes! Its Done" , dataToGet);
//   }
//   runAfter2Sec(msg); // function as an Argument
//   console.log("Hello Pakistan");

// Promise in JavaScript


// Simple Example 
// function runAfter1Sec(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log("done")
//             let data = 5 + 10
//             resolve(data);
//         })
//     })
// }

// runAfter1Sec().then(function(data){
//     console.log(data);
// })

// Example with Val (argument)

// function runAfter1Sec(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log("done with val ")
//             let data = 5 + val;
//             resolve(data);
//         })
//     })
// }

// runAfter1Sec(10).then(function(data){
//     console.log(data);
// })

// Advance Example 

// function runAfter1Sec(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log('done');
//             let data = 5 + val;
//             resolve(data);
//         })
//     })
// }

// runAfter1Sec(10).then(function(data){
//     return runAfter1Sec(data);
// }).then(function(data){
//     return runAfter1Sec(data);
// }).then(function(data){
//     console.log(data);
// })

// ASync Await 

// function runAfter1Sec(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log("Done");
//             let data = 5 + val;
//             resolve(data);
//         }, 1000)
//     })
// }
// // by-default async function returns a promise
// (async function(){
//     let data = await runAfter1Sec(5);
//     let data1 = await runAfter1Sec(data);
//     let data2 = await runAfter1Sec(data1);
//     let data3 = await runAfter1Sec(data2);
//     console.log(data3);
// })();

// more

// function runAfter1Sec(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log("done");
//             let data = 5 + val; 
//             resolve(data);
//         }, 1000)
//     })
// }

// async function run(){
//     let data = await runAfter1Sec(5);
//     let data1 = await runAfter1Sec(data);
//     let data2 = await runAfter1Sec(data1);
//     let data3 = await runAfter1Sec(data2);
//     return data3;
// }

// run().then(function(data3){
//     console.log(data3);
// })

// await Async with reject

function runAfter1Sec(val){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("done");
            let data = 5 + val; 
            if( data % 2 === 0){
                resolve(data);
            }else {
                reject("value is odd")
            }   
        }, 1000)
    })
}

runAfter1Sec(6).then(function(data){
    return runAfter1Sec(data);
}).catch(function(error){
    console.log(error);
})