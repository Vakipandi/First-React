import { useEffect, useState } from 'react'
import styles from './itemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import {getDoc , doc} from 'firebase/firestore'
import { db } from '../../services/Firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product,setProduct] = useState (null)
    const [loading,setLoading] = useState (true)

    const { itemId } = useParams();

    useEffect(() => {
        const getProducto = async () => {
          const queryRef = doc(db, "products", itemId);
          const response = await getDoc(queryRef);
          const newItem = {
            id: response.id,
            ...response.data(),
          };
          console.log(newItem)
          setTimeout(()=>{
            setProduct(newItem);
            setLoading(false)
          }, 1000)
        };
        getProducto();
    
      }, [itemId]);
    
   
    console.log(product)
    

    return(
        <div className={styles.itemDetailContiner}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer