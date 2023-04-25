// https://dev.to/abdulazizcode/scope-lexical-environment-4pdd


// Every execution context has a reference to its
//  outer environment, and that outer environment is called Lexical Environment.


// 2nd 

// Lexical in general means in hierarchy or in a sequence.Whenever a new execution
//  context(EC) is created a new lexical environment
//   is created and it is referenced in local EC in memory space.



// function two(){
//     let a;
//     console.log(" two function " + a);
// }

// function one(){
//     let a = 2;
//     console.log("called from one" + a);
//     two()
// };

// let a = 1;
// console.log(a);
// one();





// function two(){
//     console.log(a); // print Outer Reference Value
//   }
//   function one(){
//     var a=2; 
//     console.log(a);
//     two();
//   }
//   var a=1; // Outer Reference
//   console.log(a); // Normal Console print value of a 
//   one();

//   When javascript asked for the value of var a in function two’s 
//   execution context it couldn’t find it so it moved down and searched
//    in its outer lexical environment i.e. global execution context.

// function one(){

//     function two(){
//      console.log(a);
//     }
  
//     var a=2;
//     console.log(a);
//     two();
//   }
  
//   var a=1;
//   console.log(a);
//   one();



// Output for the above code is 1 2 2

// In the above example in the case of function two, its outer lexical 
// environment is function one’s execution context and for function one,
//  the outer lexical environment is the global execution context.

// When javascript asked for the value of var a in function two’s
//  execution context it couldn’t find it so it moved down and searched 
//  it in its outer lexical environment i.e. function one in this case.