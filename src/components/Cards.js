import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
  console.log(item)
    const {name, price, img} = item;
      console.log(item)
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{name}</p>
            <p>Price - {price} /-</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards