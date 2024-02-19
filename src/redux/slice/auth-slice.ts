import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth: (state, {payload}) => {
      state.isLoggedIn = payload;
    },
  },
});

export const {toggleAuth} = authSlice.actions;

export default authSlice.reducer;
