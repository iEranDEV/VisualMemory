<template>
	<div id="main">
		<img src="sad.png" alt="Visual Memory">
		<h1>You lost!</h1>
		<div id="links">
			<router-link class="btn" to="/">Main page</router-link>
			<router-link class="btn" to="/game">Play again</router-link>
		</div>
	</div>
</template>

<script>

export default {
	
}
</script>

<style scoped>

#main {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	flex-direction: column;
}

img {
	height: 35%;
	filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
	pointer-events: none;
}

h1 {
	font-size: 4rem;
	text-shadow: 2px 2px 2px #236db8;
	color: white;
}

#links {
	display: flex;
	justify-content: space-around;
	width: 30%;
}

.btn {
	font-size: 2rem;
	background-color: #ffe366;
	text-decoration: none;
	color: #2b2b2b;
	font-weight: bold;
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5%;
}

.btn:hover {
	background-color: #F2DC3F;
	box-shadow: 2px 2px 5px #2b2b2b;
}

</style>