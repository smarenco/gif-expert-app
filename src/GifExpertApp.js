import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ categories }) => {

    const [ categoriesState, addCategories ] = useState(categories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory addCategories={ addCategories }/>
            <hr />

            <ol>
                { categoriesState.map( (category) => 
                    <GifGrid key={category} category={category} />
                )}
            </ol>
        </>
    )
}
