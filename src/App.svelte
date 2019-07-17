<script>
	import todos from './store/todos.store.js';
	import List from './components/List.svelte';
	import Form from './components/Form.svelte';
	import './side-effects/handle-localstorage.js';

	export let name;

	let todosList = [];

	const unsubscribeTodos = todos.subscribe((data) => {
		todosList = data;
	})

	$: hasTodos = todosList.length > 0;
</script>

<svelte:head>
	<title>Todo App: The Svelte Edition</title>
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
		{#if hasTodos}<p>Your tasks:</p>{/if}
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