// let myPara = document.createElement("p")
// // console.log(myPara); // <p></p>
// myPara.innerHTML = ("<b>Zahid</b>")

// // console.log(myPara); // <p><b>Zahid</b></p>

let myPara = document.querySelector("#bgcolor"); // on id
//console.log(myPara);
myPara.innerText = "ZAhid"; // Write on Browser Windows
myPara.style.fontSize = "50px";
myPara.style.backgroundColor = "teal";

setInterval(function () {
  // console.log("hello");
  if (myPara.style.display === "none") {
    myPara.style.display = "block";
  } else {
    myPara.style.display = "none";
  }
}, 1000);

let newPara = document.querySelector("#change_width");
newPara.innerHTML = "<b>Zahid</b>";
newPara.style.backgroundColor = "black";
newPara.style.color = "#fff";
newPara.style.width = "100%";

setInterval(function () {
    let width = newPara.style.width;
  if (width === "100%") {
    newPara.style.width = "10%";
  }else{ // "30%"
    width = +width.replace("%", ""); // "30%"" => "30" => 30 (number)
    newPara.style.width = width + 10 + "%"; //30 + 10 = 40 + % concatination => "40%"
  }
}, 500);


let myHeading = document.querySelector("#auto_change_color");
// console.log(myHeading);
myHeading.innerText = "Muhammad Zahid Faiz";

setInterval(function(){
    let color1 = Math.round(Math.random() * 100000); // 
    //console.log(color1);
    let color2 = Math.round(Math.random() * 100000);
    myHeading.style.backgroundColor = "#" + color1; // concatination
    myHeading.style.color = "#" + color2; // concatination
}, 500);