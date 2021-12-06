import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{

//const categories = ['One Punch', 'Samurai X', 'DragonBall'];

    const [categories, setCategories ] = useState(['Messi'])

    // const handleAdd = ()=>{
    //    //setCategories(categories.concat('Simpsons'));
    //   setCategories( [...categories, 'Simpsons']);
    //   //console.log(categories)
    // }

   return( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) => (                        
                       <GifGrid 
                       key={category}
                       category={ category}/>
                    ))
                }
            </ol>
        </>
    );
}
