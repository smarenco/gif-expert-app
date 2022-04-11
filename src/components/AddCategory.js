import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ addCategories }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){
            addCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }
    }
  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)}
        />
    </form>
  )
}

AddCategory.propTypes = {
    addCategories: PropTypes.func.isRequired
}