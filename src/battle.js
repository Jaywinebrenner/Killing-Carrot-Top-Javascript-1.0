

let player = {
	hitPoints: 30,
	power: 20,
	armorClass: 5
}

let foe = {
	name: 'Emo Phillips',
	hitPoints: 30,
	power: 20,
	armorClass: 5
}


// ATTACK
const attack = () => {
	let attackButton = document.getElementById('attack-button');
	let restartButton = document.getElementById('restart-button');
	let gameMessage = document.getElementById('game-message');

	 let playerAttack = determineAttack(player.power - foe.armorClass) ;
	 foe.hitPoints -= playerAttack;
	 printToScreen()

	 if (isGameOver(foe.hitPoints)){
		 endGame("You have slain your foe.")
		 return;
	 }

	 attackButton.disabled = true;
	 gameMessage.innerText = "You attacked and struck your opponent for " + playerAttack +
	 " hit points of damage."

	 setTimeout(()=> {
		 let foeAttack = determineAttack(foe.power - player.armorClass) ;
		 player.hitPoints -= foeAttack;
		 gameMessage.innerText = "Your vile foe attacks and lands a fantastic blow upon your head for " + foeAttack +
		 " hit points of damage."
		 printToScreen();

		 if (isGameOver(player.hitPoints)){
			 gameMessage.innerText = "You have died."
			 endGame("You have died.");
			 return;
		 }

		 attackButton.disabled = false
	 }, 500)
}

const endGame = (message) => {
	document.getElementById('game-message').innerText = message;
	document.getElementById('attack-button').hidden = true;
	document.getElementById('restart-button').hidden = false;
}

const determineAttack = (power) => {
	return Math.floor(Math.random() * power);
}

const isGameOver = (hitPoints) => {
	return hitPoints <= 0;
}

const restart = () => {
	let attackButton = 	document.getElementById('attack-button');
	player.hitPoints = 30;
	foe.hitPoints = 30;
	document.getElementById('game-message').innerText = '';
	attackButton.disabled = false;
	attackButton.hidden = false;
	document.getElementById('restart-button').hidden = true;
		printToScreen();
}

const printToScreen = () => {
	document.getElementById('player-hit-points').innerText =
	player.hitPoints;
	document.getElementById('player-attack-power').innerText =
	player.power;
	document.getElementById('player-armor-class').innerText =
	player.armorClass;

	document.getElementById('foe-name').innerText =
	foe.name;
	document.getElementById('foe-hit-points').innerText =
	foe.hitPoints;
}

printToScreen();
