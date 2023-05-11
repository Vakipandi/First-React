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
        setLoading(true)
        const docRef = doc(db, 'products', itemId)
        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productsAdapted = {
                    id: res.id, ...data}
                    setProduct(productsAdapted)
                    
            })
            .catch(err => {
              console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
            


    
    },[itemId])
    return(
        <div className={styles.itemDetailContiner}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer