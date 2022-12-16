//2 toglogchiin eelj hadgalah huvsagch
//Player 1 = 0, Player 2 = 1

var activePlayer = 1;

//Players point 
var scores = [0, 0];

//Player point now 
var roundScore = 0;

//Dice point random
var dice = Math.ceil(Math.random() * 6);

window.document.querySelector('#score-0').textContent = dice;

window.document.querySelector('#score-1').textContent = dice;

//Togloom ehleh stage
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = "none";

console.log("Шоо :" + dice);
