import cart from "./img/ventas.png"
import styles from  "./carWidget.module.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    
    return (
        
        <Link to="/cart" className={styles.botonCarrito}>
            <img src={cart} className={styles.imgCarrito} alt="cart-widget"/>
            <span className={styles.cantidadCarrito}> 
                    {totalQuantity()}
            </span>
        </Link>
    )
}

export default CartWidget