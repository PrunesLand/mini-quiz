import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter";
import userReducer from "../features/user/user";
// main store of the react application
export default configureStore({
    reducer: {
        counter: counterReducer, // counts the score of the user
        user: userReducer, // sets name of user
    },

})