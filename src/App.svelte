<script>
	import List from './components/List.svelte';
	import Form from './components/Form.svelte';

	export let name;
</script>

<svelte:head>
	<style>
		body {
			padding: 0;
		}

		button {
			font-family: inherit;
			border: 0 none;
			border-radius: 0;
		}
	</style>
</svelte:head>

<div id="app">
	<h1>Todo list</h1>

	<main>
		<p>Your list:</p>
		<List />
		<Form />
	</main>
</div>

<style>
	#app {
		font-family: Arial, Calibri, sans-serif;
	}

	h1 {
		background-color: teal;
		color: white;
		margin: 0;
		padding: 2rem;
		text-align: center;
	}

	main {
		padding: 1rem 2rem;
	}

	@media (min-width: 600px) {
		main {
			margin: auto;
			max-width: 75vw;
		}
	}

	@media (min-width: 750px) {
		main {
			margin: auto;
			max-width: 50vw;
		}
	}
</style>