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
                item.id == action.payload.id ? item.editMode = true : item.editMode = false;
            })
        },
        removeTask( state, action ){
            state.tasks = state.tasks.filter(item => item.id !== action.payload.id);
        },
        checkTask( state, action ){
            state.tasks.map(item => {
                item.id == action.payload.id ? item.done = true : item.done = false; 
            })
        },
        applyEdit(state,action){
            state.tasks.map(item => {
                if (item.id == action.payload.id) item.title = action.payload.value;
                item.editMode = false;
            })
        },
        cancelEdit(state){
            state.tasks.forEach(item => item.editMode = false)
        }
    }
})


export const { addTask, removeTask, editTask, checkTask, applyEdit, cancelEdit } = todoSlice.actions; 
export default todoSlice.reducer; 