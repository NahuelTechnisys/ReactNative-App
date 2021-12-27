import { configureStore } from '@reduxjs/toolkit';
import database from './slices/database';
import user from './slices/user';

export default configureStore({
    reducer: {
        database,
        user
    }
})