import { createSlice } from '@reduxjs/toolkit';
import { ADD_NOTE, DELETE_NOTE } from '../actions/noteActions';

const initialState = {
    notes: [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam',
            createdOn: new Date(),
        },
        {
            text: 'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.',
            createdOn: new Date(),
        },
    ],
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date(),
            });
        },
        deleteTodo: (state, action) => {
            state.notes.splice(action.payload, 1);
            return notes;
        },
    },
});

// export function noteReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1);
//             console.log(state.notes);
//             return{
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default:
//             return state;
//     }
// }
