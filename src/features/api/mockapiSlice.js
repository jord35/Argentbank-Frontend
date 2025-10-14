import { createSlice } from "@reduxjs/toolkit";
import accountsData from "./mockData/accounts.json";

const initialState = {
    accounts: accountsData,
};

const mockapiSlice = createSlice({
    name: "mockapi",
    initialState,
    reducers: {},
});

export const selectAccounts = (state) => state.mockapi.accounts;

export default mockapiSlice.reducer;
