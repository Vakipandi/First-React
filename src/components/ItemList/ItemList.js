import styles from './itemList.module.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        
        <div className={styles.listGroup}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
        
    );
};

export default ItemList;