import { createSlice } from '@reduxjs/toolkit'
// couunts the user's current score
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        resetScore: state => {
            state.value -= state.value
        }
    }
})
// reference to display the curent score of the user
export const selectCount = state => state.counter.value;

export const { increment, decrement, resetScore } = counterSlice.actions

export default counterSlice.reducer