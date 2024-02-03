import React, { useState } from 'react';

const CurrencyForm = () => {
    const [action, setAction] = useState('');

    return (

        <select class="form-select" id="inputGroupSelect02" 
        onChange={(event) => setAction(event.target.value)}
        style={{ backgroundColor: '#98e49c', color:'white' }}>
            <option style={{ color:'black' }}
            value="$" name="Add">$ Dollar</option>
            <option style={{ color:'black' }}
            value="£" name="Reduce">£ Pound</option>
            <option style={{ color:'black' }}
            value="€" name="Reduce">€ Euro</option>
            <option style={{ color:'black' }}
            value="₹" name="Reduce">₹ Rupee</option>
        </select>
    );
};
export default CurrencyForm;
