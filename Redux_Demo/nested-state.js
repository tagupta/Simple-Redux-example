const redux = require('redux');
const { createStore } = require('redux');
const produce  = require('immer').produce;

const initialState = {
    name: 'Tanu',
    address: {
        street: 'Adikmet Road',
        city: 'Hyderabad',
        state: 'Telangana'
    }
}

const STREET_UPDATE = "STREET_UPDATE";

//Action Creator
const updateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case STREET_UPDATE: 
        // return {    ...state,
        //             address: {
        //                 ...state.address,
        //                 street: action.payload
        //             }
        // }
        return produce(state, (draft) => {
            draft.address.street = action.payload;
        })
        default: return state;
    
    }
}

const store = createStore(reducer);
console.log('Initial State:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated State:');
    console.log(store.getState());
});

store.dispatch(updateStreet('Mansarovar Jaipur'));

unsubscribe();