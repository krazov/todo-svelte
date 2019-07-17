import todos from '../store/todos.store';

const storagedData = localStorage.getItem('todo-list');
const initialData = storagedData ? JSON.parse(storagedData) : [];

if (Array.isArray(initialData)) {
    todos.hydrate(initialData);
}

todos.subscribe((data) => {
    localStorage.setItem('todo-list', JSON.stringify(data));
    data.length && localStorage.setItem('latest-todo-item', JSON.stringify(data.slice(-1)[0].id));
});