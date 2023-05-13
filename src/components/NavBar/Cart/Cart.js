import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, cartTotal } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className={styles.container}>
        <h1>No hay Items en el carrito</h1>
        <Link to="/First-React" >
          <button className={styles.backProduct}>Volver al listado de productos</button>

          </Link>
      </div>
    );
  }
  
  return (
  <div className={styles.container}>
      {cart.map(p => <CartItem key={p.id} {...p} />)}      
      <h3 className={styles.total}>Total: S/. {cartTotal()}</h3>
      <button onClick={() => clearCart()} className={styles.clear}>
        Limpiar Carrito
      </button>
      <Link to='/checkout' className={styles.checkout}>
        Checkout
      </Link>
      
  </div>);
};

export default Cart;
