import React from 'react'
import './Products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Products = () => {
  return (
    <section className='card-container'>
      <section className='card'>
      <img src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg" alt="shoe" />
      <div className='card-details'>
        <h3 className='card-title'>Shoe</h3>
        <section className='card-reviews'>
          <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
          <span className='total-reviews'>4</span>
        </section>

        <section className='card-price'>
          <div className='price'> 
          <del>$300</del> 200
          </div>

          <div className='bag'>
          <BsFillBagHeartFill />
          </div>
        </section>
      </div>
      </section>
    </section>
  )
}

export default Products