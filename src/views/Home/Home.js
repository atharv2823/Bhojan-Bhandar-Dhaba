import React from 'react'
import "./Home.css"
import FoodCard from '../../components/FoodCard/FoodCard'
import hotpot from "./hot-pot.png"
import { PRODUCTS,MAIN_TITLE,THEME} from '../../config/data'


const foods = [
   
]

function Home() {
  return (<>
  <div className='title'>
   <p  className = "Dhaba-Heading" style={{Color: THEME.tartiary}}>{MAIN_TITLE}</p>
   <img src={hotpot} className='heading-img' alt='logo'/>
   </div>
 <div className='Food-card-Container'>

   {PRODUCTS.map((foodItem)=>{

         
   return <FoodCard
   title = {foodItem.title}
   description ={foodItem.description}
   price = {foodItem.price}
   imgUrl={foodItem.imgUrl}
   isveg = {foodItem.isveg}
   />
   })}


   </div>
   </>)
}

export default Home