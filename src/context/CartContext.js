import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {  
        if(isInCart(item.id)){
            setCart(prev => [...prev,  {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')

            let updatedCart = [...cart];
            updatedCart.push({...item, quantity: quantity});
            setCart(updatedCart);
            console.log(updatedCart); 
          }       
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const totalQuantity = () => {
      let quantity = 0;
      cart.forEach(prod => {
        quantity += prod.quantity;
        return quantity;
      })

    }

    const cartTotal = () => {
      return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart , totalQuantity, cartTotal}}>
      {children}
    </CartContext.Provider>
  );

}

    