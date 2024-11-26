import React from 'react'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const Card = () => {
  return (
    <div>
      <section className='card'>
      <img src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg" alt="shoe" className='card-img'/>
      <div className='card-details'>
        <h3 className='card-title'>Shoe</h3>
        <section className='card-reviews'>
          <AiFillStar className='ratings-stars' /> <AiFillStar  className='ratings-stars'/> <AiFillStar className='ratings-stars' /> <AiFillStar className='ratings-stars' />
          <span className='total-reviews'>4</span>
        </section>

        <section className='card-price'>
          <div className='price'> 
          <del>$300</del> 200
          </div>

          <div className='bag'>
          <BsFillBagHeartFill className='bag-icon'/>
          </div>
        </section>
      </div>
      </section>
    </div>
  )
}

export default Card