export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectAuthLoading = state => state.auth.loading;

export const selectAuthError = state => state.auth.error;
