<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let index;
    export let id;
    export let task;
    export let done;

    const markDone = () => {
        dispatch('markDone', { id })
    };

    const markUndone = () => {
        dispatch('markUndone', { id })
    };

    const removeClicked = () => {
        dispatch('removeTodo', { id })
    };
</script>

<li class:done={done}>
    <span>{task}</span>
    <span>
        {#if done}
            <button class="uncheck" on:click={markUndone}>Mark undone</button>
        {:else}
            <button class="check" on:click={markDone}>Mark done</button>
        {/if}
        <button class="delete" on:click={removeClicked}>Remove</button>
    </span>
</li>

<style>
    li {
        align-content: center;
        align-items: center;
        background-color: gainsboro;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
    }

    .done {
        background-color: white;
        color: gainsboro;
        opacity: 0.5;
    }

    button {
        cursor: pointer;
        font-family: inherit;
        margin: 0;
    }

    .check {
        background-color: limegreen;
        color: white;
    }

    .delete {
        background-color: crimson;
        color: white;
    }
</style>
