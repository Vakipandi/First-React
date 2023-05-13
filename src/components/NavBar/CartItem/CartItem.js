import React, { useContext } from 'react'
import styles from './cartItem.module.css'
import { CartContext } from '../../../context/CartContext'

const CartItem = ({id, name, img ,  price, qty}) => {
    const {removeItem} = useContext(CartContext)

    const total = price * qty;


    

  return (
    <div className={styles.cartItem}>
        <div className={styles.cartItemInfo}>
            <img src={img} alt={name} className={styles.cartItemImg} />
            <h3 >
                {name}
            </h3>
            <p>
                Cantidad :  {qty}
            </p>
            <p>
                Precio S/. {price}
            </p>
            Subtotal :  S/. {total}

            <span>
                <button onClick={() => removeItem(id)}>❌</button>
            </span>    
        </div>
    </div>
  )
}

export default CartItem