import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducers from '../features/user/userSlice';

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;

