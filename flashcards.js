/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Toni Owens
	Date: 11/30/14

	Filename: 			flashcards.js
	Supporting Files: 	[tbd]

================================================================================

*/
$(function() {
	
	createGame(createCardSet(frontSets, backSets));
});


function createCardSet(frontPhrases, backPhrases) {
	var cards = [];

	// Populate the cards array with a bunch of stuff
	for (var i = 0; i < frontPhrases.length; i++) {
		cards[i] = document.createElement("div");
		cards[i].className = "flippable";
		cards[i].id = "currentCard";
		cards[i].index = i;

		cards[i].front = document.createElement("div");
		cards[i].front.className = "front";
		cards[i].front.innerHTML = frontPhrases[i];

		cards[i].back = document.createElement("div");
		cards[i].back.className = "back";
		cards[i].back.innerHTML = backPhrases[i];

		// show the front of the card first.
		cards[i].appendChild(cards[i].front);
		cards[i].appendChild(cards[i].back);
	}

	return cards;
}

function createGame(cards) {
	var cardBox = document.getElementById("flip-container");
	var currentIndex = Math.floor(Math.random() * cards.length);
	var back_list = [];
	// Start with the first card
	displayCard(cards[currentIndex]);

	var cardFooter = document.createElement("div");
	cardFooter.id = "cardFooter";

	var prevButton = document.createElement("input");
	console.log(currentIndex);	
	$('#next_btn').click(function(){
		back_list.push(currentIndex);
		if(back_list.length == cards.length)
		{
			back_list = [];
			currentIndex = Math.floor(Math.random() * cards.length);
		}
		else
		{
			var list2 = new Array();
			for(var i=0; i< cards.length; i++)
			{
				if($.inArray(i, back_list) == -1)
					list2.push(i);
			}
			currentIndex = list2[Math.floor(Math.random() * list2.length)];
		}
		
		console.log(currentIndex);
		displayCard(cards[currentIndex]);
	});
}
function displayCard(card)
{
	var cardBox = document.getElementById("flip-container");

	if (document.getElementById("currentCard")) {
		cardBox.removeChild(document.getElementById("currentCard"));
	}
	cardBox.appendChild(card);
	$(document).off("click", ".flippable");
	$(document).on("click", ".flippable", function () {
		$(this).toggleClass("flipme");
	});
}
