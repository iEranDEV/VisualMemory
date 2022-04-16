<template>
	<div id="game_box">
		<div id="gameBoard">
			<div class="tile" v-for="index in (tileAmount * tileAmount)" :key="index" v-bind:style="{ 
				width: tileSize + 'px',
				height: tileSize + 'px'
			}" :class="[isClicked(index) ? 'clicked' : 'not_clicked', isGameTile(index) ? 'gameTile' : '']" @click="changeTile(index)"></div>
		</div>
		<button id="submit" @click="submit">Submit</button>
	</div>
</template>

<script>
import { nextTick } from 'vue';

export default {
	name: "GameBoard",
	data() {
		return {
			points: 1,
			tiles: [],
			playerTiles: [],
			state: 'generate'
		}
	},
	computed: {
		// Zwraca ilość pól w jednym wierszu (poziom 1 = 3 pola)
		tileAmount() {
			if(this.points <= 3) return 3;
			return 4 + Math.floor(this.points / 5);
		},
		// Zwraca wielkość jednego pola w "px"
		tileSize() {
			return (400 - (this.tileAmount * 10)) / this.tileAmount;
		}
	},
	methods: {
		// Generowanie pól (zmienna tiles)
		async generateTiles() {
			this.state = 'generate';
			let value = this.points + 3;
			let size = parseInt(this.tileAmount);
			this.tiles = [];
			this.playerTiles = [];
			while(this.tiles.length < value) {
				let r = Math.floor(Math.random() * ((size * size)-1)) + 1; 
				if(this.tiles.indexOf(r) === -1) this.tiles.push(r);
			}
			await nextTick()
			// TODO: Animacja pól przy generowaniu poziomu
			for(let val of document.querySelectorAll(".gameTile")) {
				val.classList.add("animation")
			}
			setTimeout(() => {
				for(let val of document.querySelectorAll(".gameTile")) {
					val.classList.remove("animation")
				}
				this.changeState();
			}, 2000)
		},
		// Sprawdzanie, czy dane pole zostało zaznaczone przez gracza
		isClicked(index) {
			return this.playerTiles.includes(index);
		},
		// Zmiana statusu gry (generate || user)
		changeState() {
			if(this.state === 'user') this.state = 'generate';
			else this.state = 'user';
		},
		// Zmiana stanu pola (jeżeli było wybrane zostaje odznaczone)
		changeTile(index) {
			if(this.state == 'user') {
				if(this.playerTiles.includes(index)) this.playerTiles.splice(this.playerTiles.indexOf(index), 1);
				else this.playerTiles.push(index);
			}
		},
		// Potwierdzenie kilknięcia przycisku (jeżeli wartości gracza się zgadzają = kolejny poziom)
		submit() {
			if(this.playerTiles.length === this.tiles.length) {
				let check = 0;
				for(let i = 0; i < this.tiles.length; i++) {
					if(this.playerTiles.includes(this.tiles[i])) check++
				}
				if(check === this.tiles.length) {
					// Gracz wprowadził poprawne wartości
					this.points++;
					this.generateTiles();
					this.$emit('win');
				} else {
					this.$router.push('/lose');
				}
			} else {
				this.$router.push('/lose');
			}
		},
		// Sprawdzanie, czy pole zostało wygenerowane
		isGameTile(index) {
			return this.tiles.includes(index)
		}
	},
	// Event wywoływany przy tworzeniu komponentu (załadowanie strony "/game")
	created() {
		this.generateTiles();
	}
}
</script>

<style scoped>

@keyframes animationTile {
	20% {
		background-color: white;
	}
	75% {
		background-color: white;
	}
}

#submit {
	font-size: 2rem;
	background-color: #ffe366;
	text-decoration: none;
	color: #2b2b2b;
	font-weight: bold;
	width: 150px;
	display: flex;
	justify-content: center;
	border: none;
	align-items: center;
	cursor: pointer;
	border-radius: 5%;
}

#submit:hover {
	background-color: #F2DC3F;
	box-shadow: 2px 2px 5px #2b2b2b;
}

#game_box {
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

#gameBoard {
	height: 400px;
	width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.tile {
	margin: 5px;
	border-radius: 10%;
	cursor: pointer;
}

.not_clicked {
	background-color: #2462A0;
}

.animation {
	animation-name: animationTile;
	animation-duration: 2s;
}

.clicked {
	background-color: white;
}


</style>