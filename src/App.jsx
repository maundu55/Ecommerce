import React, { useState } from "react"
import './index.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import data from './db/data'
import Card from "./components/Card"


function App() {
  
const [selectedCategory, setSelectedCategory] =useState(null);

//Input Filter
const[query, setQuery] = useState("")

const handleInputChange =e=>{
  setQuery(e.target.value);
};

const filteredItems = data.filter((item)=>item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1));

//-------Radio Filter -----
const handleChange =e=>{
  setSelectedCategory(e.target.value)
}

//-------Buttons Filter----

const handleClick = e=>{
  setSelectedCategory(e.target.value)
}

function filteredData(data, selected, query){
  let filteredProducts = data

  //Filtering Input Items
  if(query){
    filteredProducts = filteredItems
  }

  //Selected Filter
  if(selected){
    filteredProducts = filteredProducts.filter(
      ({category, color, company, newPrice, title}) =>
        category === selected || 
      color === selected || 
      company ===selected || 
      newPrice ===selected || 
      title ===selected);
}

return filteredProducts.map(({img,title,star, reviews, prevPrice, newPrice })=>(
<Card 
key={Math.random()}
img={img}
title={title}
star={star}
reviews={reviews}
prevPrice ={prevPrice}
newPrice = {newPrice}
/>
));
}
  filteredData(data,selectedCategory,query)
  return (
    <>
    <Sidebar handleChange={handleChange} />
    <Nav />
    <Recommended />
    <Products />
    
  
    </>
  )
}

export default App
