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
            setProduct({id: res.id, ...res.data()})
            
        
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        
        });
    },[itemId])
    
   


    return(
        <div className={styles.itemDetailContiner}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer