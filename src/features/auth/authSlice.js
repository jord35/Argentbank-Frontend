import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");

const initialState = {
    token: token || null,
    user: null,
    isLoggedIn: !!token,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
            state.isLoggedIn = true;

            // sauvegarde en sessionStorage
            sessionStorage.setItem("token", token);
        },
        clearCredentials: (state) => {
            state.token = null;
            state.user = null;
            state.isLoggedIn = false;

            // nettoyage du storage
            sessionStorage.removeItem("token");
        },
    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
