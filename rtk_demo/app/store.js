const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducers = require('../features/user/userSlice');

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


module.exports = store;

