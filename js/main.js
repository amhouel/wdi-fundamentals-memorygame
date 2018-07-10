var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];
var score = 0;
var cardsInPlay = [];

var resetBoard = function(){
	for (var i=0; i<cards.length; i++){
	document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay=[];
};

var newGame = function(){
	resetBoard();
	score = 0;
	alert("New Game!");
};

var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			score += 1;
			alert("You found a match! You're score is: " + score + "pt(s).");
		} else {
			alert("Sorry try again! You're score is: "+ score + "pt(s).");
		}

		alert("Click \"\Reset\"\ to play again or \"\New Player\"\ to start a new game.");
	}
};

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	document.getElementById('reset').addEventListener('click', resetBoard);

	document.getElementById('newPlayer').addEventListener('click', newGame);

	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
};

var createBoard = function(){

	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();




