import React from 'react'
import "./FoodCard.css"
import veg from "./veg-icon.png"
import nonveg from "./non-veg-icon.png"

function FoodCard({title,description,price,imgUrl,isveg}) {
  return (<>
<div className='foodcard'>
  <img src={imgUrl} alt='food' className='food-card-img'/>
    <h3 className='food-title'>{title}</h3>

    <p>{description}</p>
    <p className='price'>Price: {price}</p>
    <img src={isveg ? veg : nonveg} className='veg-nonveg-img'/>

    </div>
    </>)
}

export default FoodCard