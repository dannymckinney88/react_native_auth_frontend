import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string; // Note: Storing passwords in the frontend state is highly discouraged in real applications.
  phoneNumber: string;
  isAuthenticated: boolean;
  token: string | null; // Token to manage authentication sessions
}

// Initial state for the user slice
const initialState: UserState = {
  email: 'test@example.com',
  password: 'password', // This is for simulation purposes only.
  phoneNumber: '',
  isAuthenticated: false,
  token: null
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
    authenticateUser: (state, action: PayloadAction<{email: string; password: string; token: string}>) => {
      // Simulate an authentication check
      if (action.payload.email === state.email && action.payload.password === state.password) {
        state.isAuthenticated = true;
        state.token = action.payload.token; // Set the token upon successful authentication
        console.log('User is Authenticated' +"token" +state);
      } else {
        state.isAuthenticated = false;
        state.token = null;
        console.log('User is not Authenticated');
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      console.log('User has logged out');
    }
  }
});

export const { setEmail, setPassword, setPhoneNumber, authenticateUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
