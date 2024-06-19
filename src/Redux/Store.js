import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {
  value: 5,
  isLoggedIn: false,
  registrationStatus: null,
  openForRegistrationStatus: false,
  showSignUpForm: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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
    },
    reset: state => {
      Object.assign(state, initialState);
    }
  }
});

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

export const {reset, incremented, decremented, loggedIn, setRegistrationStatus, handleOpenForRegistrationStatus, handleCloseForRegistrationStatus, handleShowSignUpForm } = counterSlice.actions;

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);