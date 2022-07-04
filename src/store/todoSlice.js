import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {tasks: []},
    reducers: {
        addTask: ( state, action ) => {
            console.log("hui pidor");
        }
    }
})

export default todoSlice.reducer; 