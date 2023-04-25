import React from 'react';
import list from '../data';
import Cards from './Cards';

const Product = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Product