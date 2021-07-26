import { createSlice } from "@reduxjs/toolkit";

export const achievements = createSlice({
    name: 'achievements',
    initialState: {
        value: null,
        titles: {
            title1: {
                id: 1,
                title: 'Bandwagon Watcher',
                description: 'Bright lights attract the flies. Do you say the same?',
            },
            title2: {
                id: 2,
                title: 'Casual Viewer',
                description: "You casually watch him for deeper insight into the world, or for the fun entertainment."
            },
            title3: {
                id: 3,
                title: 'Intelligent Ape',
                description: "With the help of DMT and Jiu Jitsu, your mind has ascended onto unknown heights beyond recognizable planes. You're fucked."
            }
        }
    },
    reducers: {
        calculateTitle: (state, action) => {
            switch (action.payload) {
                case 5:
                    state.value = state.titles.title3
                    break;
                case 1 <= action.payload <= 4:
                    state.value = state.titles.title2
                    break;
                default:
                    state.value = state.titles.title1
                    break;
            }
        }
    }
})

export const selectTitle = state => state.achievements.value;

export const { calculateTitle } = achievements.actions;

export default achievements.reducer