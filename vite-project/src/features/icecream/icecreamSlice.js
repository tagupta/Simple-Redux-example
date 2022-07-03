import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered} from '../cake/cakeSlice';

const initialState = {
    noOfIcecreams: 20,
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIcecreams --;
        },
        restocked: (state,action) => {
            state.noOfIcecreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.noOfIcecreams --;
        });
    }
});

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions;

// module.exports.icecreamActions = icecreamSlice.actions;