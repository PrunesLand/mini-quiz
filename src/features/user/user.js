import { createSlice } from "@reduxjs/toolkit";
//this reducer stores details of the current user and the answer the user chooses
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: '',
        answers: {
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            answer5: '',
        },
        page: 1
    },
    reducers: {
        setName: (state, action) => {
            state.value = action.payload
        },
        storeAnswer1: (state, action) => {
            state.answers.answer1 = action.payload
        },
        storeAnswer2: (state, action) => {
            state.answers.answer2 = action.payload
        },
        storeAnswer3: (state, action) => {
            state.answers.answer3 = action.payload
        },
        storeAnswer4: (state, action) => {
            state.answers.answer4 = action.payload
        },
        storeAnswer5: (state, action) => {
            state.answers.answer5 = action.payload
        },
        incrementPage: (state) => {
            state.page += 1
        },
        resetPage: state => {
            state.page -= state.page - 1
        }
    }
})
// displays the curernt name of the user for later use in the finish page
export const CurrentName = state => state.user.value;
// to display the page and reference to change the current question
export const selectPage = state => state.user.page;

export const { setName, storeAnswer1, storeAnswer2, storeAnswer3, storeAnswer4, storeAnswer5, incrementPage, resetPage } = userSlice.actions

export default userSlice.reducer