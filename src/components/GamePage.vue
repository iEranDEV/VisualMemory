<template>
	<div id="game">
		<div id="values">
			<div class="values_element">
				<p>Level  <span>{{ level }}</span></p>
			</div>
		</div>
		<GameBoard @win="level++" />
	</div>
</template>

<script>
import GameBoard from "./GameBoard.vue"

export default {
	name: 'GamePage',
	data() {
		return {
			level: 1
		}
	}, 
	components: {
		GameBoard
	}
}
</script>

<style scoped>

#game {
	width: 450px;
	height: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

#values {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.values_element {
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 2rem;
	font-weight: bold;
}

p {
	color: #C9CDD1;
}

span {
	color: white;
}

</style>
