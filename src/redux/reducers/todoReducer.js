import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { text: 'Go to Gym at 6', completed: false },
        { text: 'Study at 8', completed: true },
    ],
};

// Creating Reducer using Redux Toolkit

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            state.todos.map((todo, i) => {
                if (i == action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
    },
});

// export function todoReducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false,
//                     },
//                 ],
//             };
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i) => {
//                     if (i == action.index) {
//                         todo.completed = !todo.completed;
//                     }
//                     return todo;
//                 }),
//             };
//         default:
//             return state;
//     }
// }