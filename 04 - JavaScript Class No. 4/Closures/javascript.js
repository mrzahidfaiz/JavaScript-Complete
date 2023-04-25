let fName = 'Zahid';

function abc(){
    let fName = "Muhammad Zahid"
    console.log("Local Scope" + " " + fName)
    function xyz(){
        console.log("Nested Function" + " " + fName)
    }
    xyz();
}

let closure = abc();

closure;

console.log(fName);