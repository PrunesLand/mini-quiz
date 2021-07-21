import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: ''
    },
    reducers: {
        setName: (state, action) => {
            state.value.concat(action.payload)
        }
    }
})

export const { setName } = userSlice.actions

export default userSlice.reducer