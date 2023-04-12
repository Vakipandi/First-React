import styles from  './itemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
    return(

        <article className={ styles.cardItem }>
                <header className={ styles.header }>
                    <h2 className={ styles.itemHeader }>
                        { name }        
                    </h2>
                </header>
                <picture>
                    <img src={ img } alt={name} className={ styles.itemImg }/>
                </picture>
                <section>
                    <p className={ styles.info }>
                        <b>Categoria:</b> {category}
                    </p>
                    <p className={ styles.info }>
                        <b>Descripcion:</b> { description }
                    </p>
                    <p className={ styles.info }>
                        <b>Precio:</b> S/. { price } soles.
                    </p>
                    
                </section>
                <footer>
                    <ItemCount initial={ 1 } stock={ stock } onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
                </footer>
            </article>
        
            
            
        
    ); 
};

export default ItemDetail