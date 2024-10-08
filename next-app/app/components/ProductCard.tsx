import React from 'react'
import AddToCart from './AddToCart';
import styles  from './Productcard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      <AddToCart />
    </div>
  )
}

export default ProductCard;
