const redux = require('redux');
const { createStore } = require('redux');
const bindActionCreators  = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOKED";

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

//Define initial state of the application
const initialCakeState = {
    noOfCakes: 10,
    noOfIcecreams: 20
}

//create a reducer function
function reducer(state = initialCakeState, action){
    switch(action.type){
        case CAKE_ORDERED: return { ...state,
                                    noOfCakes: state.noOfCakes - 1,
        }
        case CAKE_RESTOCKED: return { ...state,
                                      noOfCakes : state.noOfCakes + action.payload,
        }
        case ICECREAM_ORDERED: return { ...state,
                                        noOfIcecreams : state.noOfIcecreams - 1,
        }
        case ICECREAM_RESTOCKED: return { ...state,
                                          noOfIcecreams : state.noOfIcecreams + action.payload,
        }
        default: return state;
    }
}


const store = createStore(reducer, applyMiddleware(logger));
console.log('Initial state:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {});
const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIcecream}, store.dispatch);

console.log('CAKE ORDERED:');
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();

console.log('CAKE RESTOCKED:');
actions.restockCake(2);
actions.restockCake(3);
actions.restockCake(4);
actions.restockCake(1);

console.log('ICECREAM ORDERED:');
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();

console.log('ICECREAM RESTOCKED:');
actions.restockIcecream(2);
actions.restockIcecream(3);
actions.restockIcecream(4);
actions.restockIcecream(1);

unsubscribe();
