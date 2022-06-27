import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'tasks',
    initialState: {tasks: []},
    reducers: {
        addTask(state, action){
            tasks.push({
                id: new Date().getTime,
                title: action.payload.text,
                done: false
            })
        },
        removeTask(state, action){},
        checkTask(state, action){}
    }
})