<script>
    import { createEventDispatcher } from 'svelte';

    export let index;
    export let id;
    export let task;
    export let done;

    const dispatch = createEventDispatcher();
    const createDispatcher = (name) => () => {
        dispatch(name, { id });
    }

    const MARK_DONE = 'markDone';
    const MARK_UNDONE = 'markUndone';
    const REMOVE_CLICKED = 'removeTodo';
</script>

<li class:done={done}>
    <span>{task}</span>
    <span>
        {#if done}
            <button class="uncheck" on:click={createDispatcher(MARK_UNDONE)}>Mark undone</button>
        {:else}
            <button class="check" on:click={createDispatcher(MARK_DONE)}>Mark done</button>
        {/if}
        <button class="delete" on:click={createDispatcher(REMOVE_CLICKED)}>Remove</button>
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
        opacity: 1;
        padding: 0.5rem;
        transition: background-color 150ms ease, opacity 300ms ease;
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
