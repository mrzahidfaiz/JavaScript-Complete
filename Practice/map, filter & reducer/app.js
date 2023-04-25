
const array = [1, 5, 6, 8, 10, 15, 3, 4]

//const ary = ["Zahid", 6, true]

// const double = [2, 1, 5, 9, 6]

// array.map(function(x){
//     console.log(x);
// })

// const Double = double.map(function(x){
//     return x *2
// })
// const Double = double.map(x => x * 2)

// console.log(Double);

// const Arr = array.filter(function(max){
//     return max < 5;
// })

// console.log(Arr);

// accumulator - the returned value of the previous iteration
// currentValue - the current item in the array
// index - the index of the current item
// array - the original array on which reduce was called
// The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

const ABC = array.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(ABC);