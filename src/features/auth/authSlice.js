import { createSlice } from "@reduxjs/toolkit";


const getStoredItem = (key) => {
    try {
        const value = sessionStorage.getItem(key) || localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error(`Erreur lors du parsing de ${key} :`, error);
        return null;
    }
};


const storedToken = sessionStorage.getItem("token") || localStorage.getItem("token");

const storedUser = getStoredItem("user");

const initialState = {
    token: storedToken || null,
    user: storedUser || null,
    isLoggedIn: !!storedToken,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { token, user, persistent } = action.payload;
            state.token = token;
            state.user = user;
            state.isLoggedIn = true;


            const storage = persistent ? localStorage : sessionStorage;
            storage.setItem("token", token);
            storage.setItem("user", JSON.stringify(user));
        },
        clearCredentials: (state) => {
            state.token = null;
            state.user = null;
            state.isLoggedIn = false;


            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
