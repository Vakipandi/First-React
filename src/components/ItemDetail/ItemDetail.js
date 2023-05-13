import styles from "./itemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState , useContext} from "react";
import  { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock ,qty}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,name,img,price
    }
    addItem(item, quantity);
  };



  return (
    <article className={styles.cardItem}>
      <header className={styles.header}>
        <h2 className={styles.itemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={styles.itemImg} />
      </picture>
      <section>
        <p className={styles.info}>
          <b>Categoria:</b> {category}
        </p>
        <p className={styles.info}>
          <b>Descripcion:</b> {description}
        </p>
        <p className={styles.info}>
          <b>Precio:</b> S/. {price} soles.
        </p>
      </section>
      <footer>
        {
        quantityAdded > 0 ? (
          <>
          <Link to="/cart">
            <button className={styles.boton}>Terminar compra</button>  
          </Link>     
               
          <Link to='/First-React'> 
            <button className={styles.boton}>Seguir comprando</button>
          </Link>
          </>

        ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )
        }
        
      </footer>
    </article>
  );
};

export default ItemDetail;
