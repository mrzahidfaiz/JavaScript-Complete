// for in loop understanding
const obj = {
  name: "ZAhid",
  age: 16,
  isTure: true,
  email: "mrzahidfaiz@gmail.com",
};

// calling all values
// key repeat each value of index
for (let key in obj) {
//   console.log(obj[key]);
  console.log(`${key} = ${obj[key]}`)
}

// With string

const string = 'code';

for (let i in string){
    console.log(`${i} = ${string[i]}`)
}

// with Arrays

const arr = ['hello', 1, 'JavaScript'];

for(let key in arr){
    console.log(arr[key]);
}



