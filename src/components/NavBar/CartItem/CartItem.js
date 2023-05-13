import React, { useContext } from 'react'
import styles from './cartItem.module.css'
import { CartContext } from '../../../context/CartContext'

const CartItem = ({id, name, img ,  price, quantity}) => {
    const {removeItem} = useContext(CartContext)

   

  return (
    <div className={styles.cartItem}>
        <div className={styles.cartItemInfo}>
            <img src={img} alt={name} className={styles.cartItemImg} />
            <h3 >
                {name}
            </h3>
            <p>
                Cantidad :  {quantity}
            </p>
            <p>
                Precio S/. {price}
            </p>
                Subtotal :  S/. {price * quantity}

            <span>
                <button onClick={() => removeItem(id)} className={styles.cartItemDeleteBtn}>❌</button>
            </span>    
        </div>
    </div>
  )
}

export default CartItem