//2 toglogchiin eelj hadgalah huvsagch
//Player 1 = 0, Player 2 = 1

var activePlayer = 1;

//Players point 
var scores = [0, 0];

//Player point now 
var roundScore = 0;

//Dice point random 1 - 6 hurtel 
var dice = Math.ceil(Math.random() * 6);


//Togloom ehleh stage
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.dice').style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", shooShid);

function shooShid() {
    var diceNumber = Math.ceil(Math.random() * 6);

    document.querySelector('.dice').style.display = "block";
    document.querySelector('.dice').src = 'dice-' + diceNumber + ".png";
       
}
