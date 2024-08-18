import React from 'react'
import "./Home.css"
import FoodCard from '../../components/FoodCard/FoodCard'
import hotpot from "./hot-pot.png"

function Home() {
  return (<>
  <div className='title'>
   <p className='Dhaba-Heading'>भोजन भंडार</p>
   <img src={hotpot} className='heading-img' alt='logo'/>
   </div>
 <div className='Food-card-Container'>
   <FoodCard
   title = "Chiken Biryani"
   description ="“Spice up your life with some Chicken Biryani magic! ✨”"
   price = "₹ 150"
   imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fhandi-chicken-biryani.html&psig=AOvVaw25QzZu7Exdlgz1OXVTr7Ff&ust=1723989428099000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCPxbOX_IcDFQAAAAAdAAAAABAE"
   isveg = {false}
   />

<FoodCard
   title = "Pizza"
   description ="“A slice a day keeps the sadness away 🍕😊”"
   price = "₹ 250"
   imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fveg-pizza&psig=AOvVaw0Ve_SW0-zZe9YhU2xuA5d-&ust=1723989929948000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDmx--Z_IcDFQAAAAAdAAAAABAE"
   isveg = {true}
   />


<FoodCard
   title = "Waradi Thali"
   description ="“Savoring the rich flavors of Maharashtra with this Varadi Thali. 🌶️”"
   price = "₹ 299"
   imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zomato.com%2Fpt%2Fncr%2Fthaal-vaadi-sector-38-noida%2Freviews%3Famp%3D1&psig=AOvVaw2ihqJFhgqDTLC3ujvRMBmo&ust=1723990658540000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCyou-b_IcDFQAAAAAdAAAAABAE"
   isveg = {true}
   />



<FoodCard
   title = "Mutton Handi"
   description ="“A pot full of flavor: Mutton Handi magic! 🍲”"
   price = "₹ 850"
   imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dhandi%2Bmutton&psig=AOvVaw2_dOGKX6wF0BKXkOD3cN0j&ust=1723990709206000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj_uIGc_IcDFQAAAAAdAAAAABAE"
   isveg = {false}
   />

   </div>
   </>)
}

export default Home