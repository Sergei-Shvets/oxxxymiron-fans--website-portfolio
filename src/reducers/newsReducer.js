import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '../utils/common';
import { newsItemCollectionQuery, newsItemQuery } from '../utils/queries';

const initialState = {
    items: [],
    item: null,
    isLoading: false,
};

export const getNewsItems = createAsyncThunk('newsItems/getNewsItems', async (_, thunkAPI) => {
    try {
        const data = await request(newsItemCollectionQuery);
        const { items } = data.newsCollection;
        return items;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getNewsItem = createAsyncThunk('newsItems/getNewsItem', async (id, thunkAPI) => {
    try {
        const data = await request(newsItemQuery(id));

        return data.news;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const newsItemsSlice = createSlice({
    name: 'newsItems',
    initialState: initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getNewsItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNewsItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(getNewsItems.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getNewsItem.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNewsItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.item = action.payload;
            })
            .addCase(getNewsItem.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default newsItemsSlice.reducer;
