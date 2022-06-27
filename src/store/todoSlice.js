import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask(){},
        removeTask(){},
        checkTask(){},
    }
})