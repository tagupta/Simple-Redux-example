const redux  = require('redux');
const axios = require('axios');
const { createStore } = require('redux');
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

//initialState
const initialState = {
    loading: false,
    users:[],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCEEDED: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILED: return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state;
    }
}

const fetchUsers = () => {
    return function(dispatch){
                dispatch(fetchUsersRequested());
                axios.get('https://jsonplaceholder.typicode.com/users')
                     .then(response => {
                        const users = response.data.map(user => user.id);
                        dispatch(fetchUsersSucceeded(users));
                     })
                     .catch(error => {
                        //error.message will be displayed
                        dispatch(fetchUsersFailed(error.message));
                     })
           }
}

const store = createStore(reducer,applyMiddleware(logger,thunkMiddleware));

const actions = bindActionCreators({fetchUsersRequested, fetchUsersSucceeded, fetchUsersFailed,fetchUsers},store.dispatch);
console.log('Initial State: ');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {});

actions.fetchUsers();

unsubscribe();