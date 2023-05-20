var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceNumber);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceNumber2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win ";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win ";
} else {
  document.querySelector("h1").innerHTML = "Draw ";
}

//////////////////// Diffrent Approach ///////////////////////

// function random() {
//   var n = Math.random();
//   n = n * 6;
//   n = Math.floor(n) + 1;

//   var m = Math.random();
//   m = m * 6;
//   m = Math.floor(m) + 1;

//   if (m>n){
//     document.querySelector("h1").innerHTML="Player 2 win "
// }
// else if (m<n){
//     document.querySelector("h1").innerHTML="Player 1 win "
// }
// else {
//     document.querySelector("h1").innerHTML="Drew "
// }

//   if (n === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//   }
//   else if ( n===2){
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//   }
//   else if ( n===3){
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//   }
//   else if ( n===4){
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//   }
//   else if ( n===5){
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//   }
//   else{
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   }

//   if (m === 1) {
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//   }
//   else if ( m===2){
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//   }
//   else if ( m===3){
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//   }
//   else if ( m===4){
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//   }
//   else if ( m===5){
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//   }
//   else{
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//   }

// }

// random();
