import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        username: "",
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            console.log("payload", payload);
            state.value = payload;
        },
        logout: (state) => {
            state.value.username = "";
        },
    },
});

// export const selectUsername = (state) => state.value.username;

export const { login, logout } = userSlice.actions;

export default userSlice;
