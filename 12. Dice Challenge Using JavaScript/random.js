var randomNum1=Math.floor(Math.random()*6)+1;
var randomNum2=Math.floor(Math.random()*6)+1;

var randomImg1="dice"+randomNum1+".png";
var randomImg2="dice"+randomNum2+".png";

var imgSrc1="./images/"+randomImg1;
var imgSrc2="./images/"+randomImg2;

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src", imgSrc1);
img2.setAttribute("src", imgSrc2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}

else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML="Draw!";
}