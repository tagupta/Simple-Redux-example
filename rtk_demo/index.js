const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;
console.log('initial state: ' , store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

// console.log('Order cake: ');
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// console.log('Restock cake: ');
// store.dispatch(cakeActions.restocked(2));

// console.log('Order Icecream: ');
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());

// console.log('Restock Icecream: ');
// store.dispatch(icecreamActions.restocked(2));

unsubscribe();



