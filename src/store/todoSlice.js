import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {tasks: []},
    reducers: {
        addTask( state, action ){
            state.tasks.push({
                id: Date.now(),
                title: action.payload.title,
                completed: false
            });
        }
    }
})
export const { addTask } = todoSlice.actions; 
export default todoSlice.reducer; 