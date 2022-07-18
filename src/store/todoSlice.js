import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {tasks: []},
    reducers: {
        addTask( state, action ){
            state.tasks.push({
                id: nanoid(),
                title: action.payload.title,
                done: false
            });
        },
        removeTask( state, action ){
            state.tasks = state.tasks.filter(i => i.id !== action.payload.id);
        },
        checkTask( state, action ){
            
        }
    }
})
export const { addTask, removeTask, checkTask } = todoSlice.actions; 
export default todoSlice.reducer; 