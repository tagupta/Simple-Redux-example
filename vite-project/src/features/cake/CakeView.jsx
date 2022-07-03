import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import  { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
    const [value, setValue] = useState(1);
    const numberOfCakes = useSelector((state) => state.cake.noOfCakes);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
    }
  return (
    <div>
        <h2>Number of cakes - {numberOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <input type="number" placeholder='Cakes to Restock' onChange={handleChange}/>
        <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
    </div>
  )
}
