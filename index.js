var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
// alert("working");
// /images/first.jpg
var randomDiceImage = "/images/dice"+ randomNumber1+".jpg";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var randomDiceImage2 = "/images/dice"+randomNumber2+".jpg";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins";
}

 else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML= "Player 2 Wins 🚩";
} 

else
{
    document.querySelector("h1").innerHTML= "its a Draw!";
}


