import { createSlice } from '@reduxjs/toolkit'

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

export const selectCount = state => state.counter.value;

export const { increment, decrement, resetScore } = counterSlice.actions

export default counterSlice.reducer