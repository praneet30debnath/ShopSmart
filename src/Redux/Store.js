import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 5,
    isLoggedIn: false,
    registrationStatus: null,
    openForRegistrationStatus: false,
    showSignUpForm: false
  },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
    loggedIn: (state, action) => {
      state.isLoggedIn = action.payload.value
    },
    setRegistrationStatus: (state, action) => {
      state.registrationStatus = action.payload.value
    },
    handleOpenForRegistrationStatus: (state) => {
      state.openForRegistrationStatus = true
    },
    handleCloseForRegistrationStatus: (state) => {
      state.openForRegistrationStatus = false
    },
    handleShowSignUpForm: (state, action) => {
      state.showSignUpForm = action.payload.value
    }
  }
});

export const { incremented, decremented, loggedIn, setRegistrationStatus, handleOpenForRegistrationStatus, handleCloseForRegistrationStatus, handleShowSignUpForm } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
});