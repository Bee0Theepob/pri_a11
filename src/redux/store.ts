import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/bookSlice';

const store = configureStore({
    reducer: {
        bookSlice: bookReducer, // Updated key to match test utility
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
