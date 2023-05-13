import cart from "./img/ventas.png"
import styles from  "./carWidget.module.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    
    return (
        // <div>
        //      <button className={styles.botonCarrito}>
        //         <img src={cart} className={styles.imgCarrito} alt="cart-widget"/> 
        //         <span className={styles.contCarrito}>0</span>     
        //     </button> 
        // </div>
        <Link to="/cart" className={styles.cartWid} style= {{display: totalQuantity > 0 ? "block" : "none"}}>
            <img src={cart} className={styles.imgCarrito} alt="cart-widget"/> 
            {totalQuantity}
        </Link>
    )
}

export default CartWidget