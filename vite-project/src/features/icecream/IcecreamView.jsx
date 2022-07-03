import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
    const [value, setValue] = useState(1);
    const numberOfIC = useSelector(state => state.icecream.noOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Icecreams - {numberOfIC}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <input type="number" defaultValue={value} placeholder='Icecreams to restock' onChange={(e) => {
                setValue(Number(e.target.value));
            }}/>
            <button onClick={() => dispatch(restocked(value))}>Restock icecream</button>
        </div>
    )
}
