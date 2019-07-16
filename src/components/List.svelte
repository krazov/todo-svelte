<script>
    import { todos, changeStatus, removeTodo } from '../store/todos.store.js';
    import Item from './Item.svelte';

    let items;

	const unsubscribe = todos.subscribe((data) => {
		items = data;
    });

    const handleMarkDone = ({ detail: { id }}) => {
        changeStatus(id, true);
    };

    const handleMarkUndone = ({ detail: { id }}) => {
        changeStatus(id, false);
    };

    const handleRemoveTodo = ({ detail: { id }}) => {
        removeTodo(id);
    };

    $: sortedItems = [...items].sort(
        (a, b) => a.done - b.done
    );
</script>

<ul>
    {#each sortedItems as item, i}
        <Item
            id={item.id}
            index={i + 1}
            {...item}
            on:markDone={handleMarkDone}
            on:markUndone={handleMarkUndone}
            on:removeTodo={handleRemoveTodo}
        />
    {:else}
        <p>Add some tasks</p>
    {/each}
</ul>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>