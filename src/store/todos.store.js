import { writable } from 'svelte/store';

const todos = writable([]);

export const hydrateStore = (data) => {
    todos.update((list) => {
        if (list.length) {
            throw Error('Store already hydrated');
        }

        return data;
    });
};

export const addTodo = (todo) => {
    todos.update((list) => [...list, todo]);
};

export const changeTodoStatus = (id, done) => {
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

export default {
    subscribe: todos.subscribe,
    hydrate: hydrateStore,
    add: addTodo,
    changeStatus: changeTodoStatus,
    remove: removeTodo,
};