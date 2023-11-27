import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  isAuth: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { login, isAuth } = action.payload;
      state.login = login;
      state.isAuth = isAuth;
    },
    resetUser: (state) => {
      (state.login = null), (state.isAuth = false);
    },
    setUserAuthError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setUser, resetUser, setUserAuthError } = userSlice.actions;
export default userSlice.reducer;

export const loginUser = (login, password) => async (dispatch) => {
  let isAuth;
  const isUserLoginSuccess = !!login.length && !!password.length;
  if (isUserLoginSuccess) {
    isAuth = true;
    dispatch(setUser({ login, isAuth }));
  } else {
    dispatch(setUserAuthError('Log in error!!!'));
  }
};
