import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";
import mockapiReducer from "../features/api/mockapiSlice";

// test
const logTokenMiddleware = (store) => (next) => (action) => {
    console.log("[Middleware] Action dispatchée :", action.type);
    const result = next(action);
    const token = store.getState().auth.token;
    console.log("[Middleware] Token actuel :", token);
    return result;
};

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        mockapi: mockapiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, logTokenMiddleware),
});

export default store;
window.store = store;
