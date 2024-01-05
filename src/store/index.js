import { configureStore } from '@reduxjs/toolkit';
import tourReducer from '../reducers/tourReducer';
import tracksReducer from '../reducers/tracksReducer';
import newsReducer from '../reducers/newsReducer';

export const store = configureStore({
    reducer: {
        tour: tourReducer,
        tracks: tracksReducer,
        news: newsReducer,
    },
    devTools: true,
});
