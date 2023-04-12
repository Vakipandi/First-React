import { useState } from "react"
import styles from './ItemCount.module.css'


const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity,setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
           <div className={styles.contBotones}>
                
                <button className={styles.boton} onClick={ decrement }>-</button>
                <span>{quantity}</span>
                <button className={styles.boton} onClick={ increment }>+</button>
            </div>  
            <div className={styles.contBotones}>
                <button className={styles.botonAdd} onClick={ () => onAdd(quantity) } disabled={!stock}>Agregar al carrito</button>
            </div>  
        </>
    )
}

export default ItemCount