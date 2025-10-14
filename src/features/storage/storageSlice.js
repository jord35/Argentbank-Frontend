import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    persistent: false,
};

const storageSlice = createSlice({
    name: "storage",
    initialState,
    reducers: {
        setPersistent: (state, action) => {
            state.persistent = action.payload;
        },
    },
});

export const { setPersistent } = storageSlice.actions;
export const selectPersistent = (state) => state.storage.persistent;
export default storageSlice.reducer;
