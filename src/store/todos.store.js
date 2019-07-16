import { writable } from 'svelte/store';

const storagedData = localStorage.getItem('todo-list');
const initialData = storagedData ? JSON.parse(storagedData) : [];

export const todos = writable(Array.isArray(initialData) ? initialData : []);

todos.subscribe((data) => {
    localStorage.setItem('todo-list', JSON.stringify(data));
    data.length && localStorage.setItem('latest-todo-item', JSON.stringify(data.slice(-1)[0].id));
});

export const addTodo = (todo) => {
    todos.update((list) => [...list, todo]);
};

export const changeStatus = (id, done) => {
    todos.update((list) => {
        const index = list.findIndex(item => item.id == id);

        return list[index].done == done
            ? list
            : [
                ...list.slice(0, index),
                { ...list[index], done },
                ...list.slice(index + 1),
            ];
    });
};

export const removeTodo = (id) => {
    todos.update((list) => {
        const index = list.findIndex(item => item.id == id);
        return [
            ...list.slice(0, index),
            ...list.slice(index + 1),
        ];
    });
};

export default todos;