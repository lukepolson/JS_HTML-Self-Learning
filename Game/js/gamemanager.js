let img_path;
let enemy_img_path;

let GameManager = {
	setGameStart: function(classType) {
		this.resetPlayer(classType);
		this.setPreFight();	
	},
	resetPlayer: function(classType) {
		switch(classType) {
			case "Warrior":
				player = new Player(classType, 200, 0, 200, 100, 50)
				img_path = 'img/hero/warrior.png'
				break;
			case "Mage":
				player = new Player(classType, 80, 0, 50, 200, 50)
				img_path = 'img/hero/mage.png'
				break;
			case "Shaman":
				player = new Player(classType, 100, 0, 100, 150, 200)
				img_path = 'img/hero/shaman.jpg'
				break;
		}
		let getInterface = document.querySelector(".interface");
		getInterface.innerHTML = '<img src="'+img_path+'" class="img-avatar"><div><h3>' +classType + '</h3><p class="health-player">Health: ' + player.health + '</p> <p>Mana: ' + player.mana + '</p> <p>Strength: ' + player.strength + '</p> <p>Agility: ' + player.agility + '</p><p>Speed: '+player.speed + '</p></div>';
	},
	setPreFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getArena = document.querySelector(".arena");
		getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
		getArena.style.visibility = "visible";
	},
	setFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getEnemy = document.querySelector(".enemy");
		// Create enemy!
		let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
		let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
		console.log(chooseRandomEnemy);
		switch(chooseRandomEnemy) {
			case 0:
				enemy = enemy00;
				enemy_img_path = 'img/enemy/gob.jpg';
				break;
			case 1:
				enemy = enemy01;
				enemy_img_path = 'img/enemy/troll.jpg';
		}
		getHeader.innerHTML = '<p>Task: Choose your move</p>';
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">AtAcc</a>';
		getEnemy.innerHTML = '<img src="'+enemy_img_path+'" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p> <p>Mana: ' + enemy.mana + '</p> <p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p><p>Speed: '+enemy.speed + '</p></div>';
	}
}