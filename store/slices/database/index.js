import DATABASE from '../../../data/database';
import { createSlice } from '@reduxjs/toolkit';

export const databaseSlice = createSlice({
    name: 'database',
    initialState:{
        list: DATABASE
    },
    reducers: {
        setNewsList: (state, action) =>{
            state.list = action.payload;
        },
        addNew: (state, action) => {
            state.list = [...state.list,action.payload];
        }
    }
})

export const {setNewsList, addNew} = databaseSlice.actions

export default databaseSlice.reducer;
