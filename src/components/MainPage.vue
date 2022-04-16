<template>
	<div>
		<img src="logo.png" alt="Visual Memory">
		<h1>Visual Memory</h1>
		<router-link id="btn" to="/game">Start</router-link>
	</div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>

div {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
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

#btn {
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

#btn:hover {
	background-color: #F2DC3F;
	box-shadow: 2px 2px 5px #2b2b2b;
}

</style>
