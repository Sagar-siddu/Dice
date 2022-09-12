var randomvar1 = Math.floor(Math.random()*6)+1;
var randomdice1 = "dice" + randomvar1 + ".png";
var randomimg1 =  "images/" + randomdice1;

var img1 = document.querySelectorAll("img")[0].setAttribute("src",randomimg1);

var randomvar2 = Math.floor(Math.random()*6)+1;
var randomdice2 = "dice" + randomvar2 + ".png";
var randomimg2 =  "images/" + randomdice2;

var img2 = document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(randomdice1===randomdice2){
  document.querySelector("h1").innerHTML= "Draw!"
}
else if (randomdice1>randomdice2) {
  title1 = document.querySelector("h1").innerHTML= "🚩Player 1 Wins!";
}
else{
  title2 = document.querySelector("h1").innerHTML= "Player 2 Wins!🚩";
}
