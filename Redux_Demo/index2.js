const redux = require('redux');
const { createStore } = require('redux');
const bindActionCreators  = redux.bindActionCreators ;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOKED";
const combineReducers = redux.combineReducers;
//Action creator - function that returns an action
function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty){
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIcecream(qty = 1){
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIcecream(qty = 1){
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

//Define initial state of the application for cake
const initialCakeState = {
    noOfCakes: 10,
}

//Define initial state of the application for icecream
const initialIcecreamState = {
    noOfIcecreams: 20
}

//create a reducer function for cake
function reducerCake(state = initialCakeState, action){
    switch(action.type){
        case CAKE_ORDERED: return { ...state,
                                    noOfCakes: state.noOfCakes - 1,
        }
        case CAKE_RESTOCKED: return { ...state,
                                      noOfCakes : state.noOfCakes + action.payload,
        }
        default: return state;
    }
}

//create a reducer function for icecream
function reducerIcecream(state = initialIcecreamState, action){
    switch(action.type){
        case ICECREAM_ORDERED: return { ...state,
                                        noOfIcecreams : state.noOfIcecreams - 1,
        }
        case ICECREAM_RESTOCKED: return { ...state,
                                          noOfIcecreams : state.noOfIcecreams + action.payload,
        }
        case CAKE_ORDERED: return { ...state,
                                    noOfIcecreams : state.noOfIcecreams - 1,
        }
        default: return state;
    }
}

const rootReducer  = combineReducers({
    cake: reducerCake,
    iceCream: reducerIcecream
});

const store = createStore(rootReducer);
console.log('Initial state:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {console.log('Updated State: ', store.getState())});
const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIcecream}, store.dispatch);

console.log('CAKE ORDERED:');
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();

console.log('CAKE RESTOCKED:');
actions.restockCake(2);


console.log('ICECREAM ORDERED:');
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();


console.log('ICECREAM RESTOCKED:');
actions.restockIcecream(2);


unsubscribe();
