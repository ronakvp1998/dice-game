var ramdonnum1 = Math.floor(Math.random()*6)+1;
var pics = "dice" + ramdonnum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , pics);

var ramdonnum2 = Math.floor(Math.random()*6)+1;
var pics = "dice" + ramdonnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , pics);
if(ramdonnum1 === ramdonnum2){
  document.querySelector("h1").innerHTML= "Draw💥"
}
else if(ramdonnum1 > ramdonnum2){
  document.querySelector("h1").innerHTML= "Player1 wins"
}
else{
  document.querySelector("h1").innerHTML= "Player2 wins"
}
