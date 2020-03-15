let gameStory ={
	areaOne: 'You have traversed the sprawling metropolis of Laughlandia for weeks on end and have successfully spotted the elusive Prop Tower where the inner sanctum of the Illuminati of Laughter resides. Slinking through garbage strewn alley ways, skillfully avoiding the army of Cybernetic Dane Cooks on partrol, you are greeted with the unusual smell of sauteed garlic clearly eminating from a ramshackled tent strewn together via rusted shopping carts and shredded blue tarps.',
	areaTwo: ''
}

let areaOptions = {
	areaOneOptionOne: ''
}

class Player {
	constructor(name, hitPoints, power, armorClass) {
		this.name = name;
		this.hitPoints = hitPoints;
		this.power = power;
		this.armorClass = armorClass;
	}
}

let player = new Player (null, 30, 20, 10);
let emoPhilips = new Player ('Emo Phillips',20,10,2);
let gallagher = new Player ('Gallagher',20,10,2)


// let player = {
// 	hitPoints: 30,
// 	power: 20,
// 	armorClass: 5
// }

// let foe = {
// 	name: 'Emo Phillips',
// 	hitPoints: 30,
// 	power: 20,
// 	armorClass: 5
// }

// CONTINUE GAME STORY
const story = () => {
	document.getElementById('story-button');
	printStory();
}

// INITIATIVE
// const initiative = () => {
// 	if (dice >= 6)
// }



// ATTACK
const attack = () => {
	let attackButton = document.getElementById('attack-button');
	let restartButton = document.getElementById('end-battle-button');
	let gameMessage = document.getElementById('battle-message-text');

	 let playerAttack = determineAttack(player.power - emoPhilips.armorClass) ;
	 emoPhilips.hitPoints -= playerAttack;
	 printBattle()

	 if (isGameOver(emoPhilips.hitPoints)){
		 endGame("You have slain " + emoPhilips.name)
		 return;
	 }

	 attackButton.disabled = true;
	 gameMessage.innerText = "You attacked and crush " + emoPhilips.name + " for " + playerAttack +
	 " hit points of damage."

	 setTimeout(()=> {
		 let foeAttack = determineAttack(emoPhilips.power - player.armorClass) ;
		 player.hitPoints -= foeAttack;
		 gameMessage.innerText = "Your vile foe attacks and lands a fantastic blow upon your head for " + foeAttack +
		 " hit points of damage."
		 printBattle();

		 if (isGameOver(player.hitPoints)){
			 gameMessage.innerText = "You have died."
			 endGame("You have died.");
			 return;
		 }

		 attackButton.disabled = false
	 }, 500)
}


// ENDGAME
const endGame = (message) => {
	document.getElementById('battle-message-text').innerText = message;
	document.getElementById('attack-button').hidden = true;
	document.getElementById('end-battle-button').hidden = false;
}

const determineAttack = (power) => {
	return Math.floor(Math.random() * power);
}

const dice = () => {
	return Math.floor(Math.random() * 20) +1;
}

// CHECK IF GAME IS OVER
const isGameOver = (hitPoints) => {
	return hitPoints <= 0;
}



const restart = () => {
	let attackButton = 	document.getElementById('attack-button');
	player.hitPoints = 30;
	emoPhilips.hitPoints = 30;
	document.getElementById('battle-message-text').innerText = '';
	attackButton.disabled = false;
	attackButton.hidden = false;
	document.getElementById('end-battle-button').hidden = true;
		printBattle();
}

const printBattle = () => {
	document.getElementById('player-hit-points').innerText =
	player.hitPoints;
	document.getElementById('player-attack-power').innerText =
	player.power;
	document.getElementById('player-armor-class').innerText =
	player.armorClass;

	document.getElementById('foe-name').innerText =
	emoPhilips.name;
	document.getElementById('foe-hit-points').innerText =
  emoPhilips.hitPoints;
}




printBattle();

const printStory = () => {
	document.getElementById('story-message-text').innerText =
		gameStory.areaOne;
}
