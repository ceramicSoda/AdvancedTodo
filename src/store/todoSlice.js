import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {tasks: [ [] ], curGroup: 0, maxGroups: 5},
    reducers: {
        addTask(state, action){
            state.tasks[state.curGroup].push({
                id: nanoid(),
                title: action.payload.title,
                done: false,
                editMode: false
            });
        },
        addGroup(state){
            if (state.tasks.length < state.maxGroups)
                state.tasks.push([]);
        },
        nextGroup(state){
            (state.curGroup < (state.tasks.length-1))
            ? state.curGroup++
            : state.curGroup = 0;
        },
        prevGroup(state){
            (state.curGroup > 0)
            ? state.curGroup--
            : state.curGroup = (state.tasks.length-1);
        },
        editTask(state, action){
            state.tasks[state.curGroup].map(item => {
                item.id == action.payload.id 
                ? item.editMode = true 
                : item.editMode = false;
            })
        },
        removeTask(state, action){
            state.tasks[state.curGroup] = state.tasks[state.curGroup].filter(item => item.id !== action.payload.id);
        },
        checkTask(state, action){
            state.tasks[state.curGroup].map(item => {
                item.id == action.payload.id 
                ? item.done = true 
                : item.done = false; 
            })
        },
        applyEdit(state,action){
            state.tasks[state.curGroup].map(item => {
                if (item.id == action.payload.id) 
                    item.title = action.payload.value;
                item.editMode = false;
            })
        },
        cancelEdit(state){
            state.tasks[state.curGroup].forEach(item => item.editMode = false)
        }
    }
})


export const { addTask, removeTask, editTask, checkTask, applyEdit, cancelEdit, addGroup, nextGroup, prevGroup } = todoSlice.actions; 
export default todoSlice.reducer; 

console.log(todoSlice); 