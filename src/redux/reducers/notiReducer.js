import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
};

const notiSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        reset: (state, action) => {
            state.message = '';
        },
    },
    extraReducers: {
        'todo/addTodo': (state, action) => {
            state.message = 'Todo added successfully';
        },
    },
});

export const notiReducer = notiSlice.reducer;
export const resetNotification = notiSlice.actions.reset;

export const notiSelector = (state) => state.notiReducer.message;
