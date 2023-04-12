import cart from "./img/ventas.png"
import styles from  "./carWidget.module.css"

const CartWidget = () => {
    return (
        <div>
             <button className={styles.botonCarrito}>
                <img src={cart} className={styles.imgCarrito} alt="cart-widget"/> 
                <span className={styles.contCarrito}>0</span>     
            </button> 
        </div>
    )
}

export default CartWidget