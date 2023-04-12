import { Link } from 'react-router-dom';
import styles from './item.module.css'


const Item = ({category,id,name,img,price,stock}) => {
    return(
        <>
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
                        <b>Precio:</b> S/.  { price } soles.
                    </p>
                    <p className={ styles.info }>
                        <b>Stock disponible:</b>  { stock }
                    </p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} className={ styles.option }>Ver detalle</Link>
                </footer>
            </article>
        </>
    );
};

export default Item;