
export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) =>
    state.auth.user ? state.auth.user.userName : null;