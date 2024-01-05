import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '../utils/common';
import { tourItemCollectionQuery } from '../utils/queries';

const initialState = {
    items: [],
    isLoading: false,
};

export const getTourItems = createAsyncThunk('tourItems/getTourItems', async (_, thunkAPI) => {
    try {
        const data = await request(tourItemCollectionQuery);
        const { items } = data.tourItemCollection;
        return items;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const tourItemsSlice = createSlice({
    name: 'tourItems',
    initialState: initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getTourItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTourItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(getTourItems.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default tourItemsSlice.reducer;
