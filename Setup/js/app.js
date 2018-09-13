var app = new Vue({
	el : '#app',
	data:{
		gamestarted: false,
		abilitiesstarted: false,
		playerLife: 100,
		monsterLife: 100,
		life : true,
		attacks: [],
		playerAtack : 0,
		monsterAtack : 0,
		playerClass : 'playerClass',
		monsterClass : 'monsterClass'

	},
	methods : {
		start : function(){
					return(this.gamestarted = true);
				},
		normalAttack : function(){
				this.abilitiesstarted = true;
				this.playerAtack = Math.floor((Math.random()*5)+10);
				if (this.monsterLife-this.playerAtack >= 0) 
				{
					this.monsterLife = this.monsterLife-this.playerAtack;
				}
				else{
					alert("you won");
				}
				value1 = "player attack "+ this.playerAtack.toString();
				
				this.attacks.push(value1);
				this.monsAttack();
				},
		specialAttack : function(){
				this.abilitiesstarted = true
				this.playerAtack = Math.floor((Math.random()*5)+15);
				if (this.monsterLife-this.playerAtack >= 0) 
				{
					this.monsterLife = this.monsterLife-this.playerAtack;
				}
				else{
					alert("you won");
				}				
				value1 = "player special attack "+ this.playerAtack.toString();
				this.attacks.push(value1);
				this.monsAttack();
				},
		healing : function(){
				var heal = Math.floor((Math.random()*5)+10);
				this.monsAttack();
				if ( (this.playerLife+heal)-this.monsterAtack > 0  && (this.playerLife+heal) <= 100) {
					this.playerLife = this.playerLife + heal;
					}
				else{
					this.playerLife = 100;
				}
				value1 = "player heal "+ heal.toString();
				this.attacks.push(value1);
				},
		endchance: function(){
				this.abilitiesstarted = false;
				this.gamestarted = false;
				this.playerLife = 100;
				this.monsterLife = 100;
				},
		monsAttack: function(){
				this.monsterAtack = Math.floor((Math.random()*10)+1);
				if (this.playerLife-this.monsterAtack >= 0) 
				{
					this.playerLife = this.playerLife-this.monsterAtack;
				}
				value2 = "monster attack "+this.monsterAtack.toString();
				this.attacks.push(value2);
			}


	},
	computed : {

	}
	});
