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
                done: false,
                editMode: false
            });
        },
        editTask(state, action){
            state.tasks.map(item => {
                (item.id == action.payload.id) ? item.editMode = true : item.editMode = false;
            })
        },
        removeTask( state, action ){
            state.tasks = state.tasks.filter(item => item.id !== action.payload.id);
        },
        checkTask( state, action ){
            
        }
    }
})
export const { addTask, removeTask, editTask } = todoSlice.actions; 
export default todoSlice.reducer; 