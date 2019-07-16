const initialId = localStorage.getItem('latest-todo-item');

let id = initialId ? JSON.parse(initialId) : 0;

export const createTodo = (task) => ({
    id: ++id,
    task,
    done: false,
});