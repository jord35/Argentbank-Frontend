import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";

// test
const logTokenMiddleware = (store) => (next) => (action) => {
    console.log("[Middleware] Action dispatchée :", action.type);
    const result = next(action); // on laisse passer l'action au reducer


    const token = store.getState().auth.token;
    console.log("[Middleware] Token actuel :", token);

    return result;
};

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware).concat(logTokenMiddleware),
});

export default store;
window.store = store;