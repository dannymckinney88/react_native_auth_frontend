// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
  phoneNumber: string;
  isAuthenticated: boolean;
}

// Initial state for the user slice
const initialState: UserState = {
  email: '',
  password: '',
  phoneNumber: '',
  isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    authenticateUser: (state, action: PayloadAction<{email: string; password: string}>) => {
      // Simulate an authentication check
      if (action.payload.email === state.email && action.payload.password === state.password) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    }
  }
});

export const { setEmail, setPassword, setPhoneNumber, authenticateUser } = userSlice.actions;

export default userSlice.reducer;
