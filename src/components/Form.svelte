<script>
    import todos from '../store/todos.store.js';
    import { createTodo } from '../utils/item-creator.helper.js';

    let task = '';

    const submitForm = (event) => {
        todos.add(createTodo(task));
        task = '';
    }
</script>

<form on:submit|preventDefault={submitForm}>
    <fieldset>
        <legend>New task</legend>
        <input type="text" bind:value={task} placeholder="Write a task">
        <button>Add</button>
    </fieldset>
</form>

<style>
    form {
        margin-top: 3rem;
    }

    fieldset {
        align-content: center;
        align-items: center;
        background-color: silver;
        border: 0 none;
        display: flex;
        justify-content: space-between;
    }

    legend {
        background-color: gainsboro;
        padding: 0.2rem 0.5rem;
    }

    input {
        width: 75%;
    }

    button {
        cursor: pointer;
        width: 20%;
    }
</style>