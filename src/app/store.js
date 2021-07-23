import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter";
import userReducer from "../features/user/user";

export default configureStore({
    reducer: {
        counter: counterReducer, // counts the score of the user
        user: userReducer // sets name of user
    },

})