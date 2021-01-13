

// first dice image
var randomNumber1 = Math.floor(Math.random() *6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var imageSource1 = "images/"+randomImage1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imageSource1);


// second dice image
var randomNumber2 = Math.floor(Math.random() *6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var imageSource2 = "images/"+randomImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imageSource2);



// check winner condition
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 is the Winner!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 is the Winner!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
