import { useEffect, useState } from 'react'
import styles from './itemListContainer.module.css'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import {getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../../services/Firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

        getDocs(collectionRef)
        .then(res => {
            const productsAdapted = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setProducts(productsAdapted)
           
        
        })
        .catch(err => {
            console.log(err)
        
        })
        .finally(() => {
            setLoading(false)
        
        })
            
    },[categoryId])

    if(loading) return <h1 className={styles.loading}>Cargando...</h1>

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>{greeting}</h1>
            <ItemList products = { products } />
        </div>
    )
}

export default ItemListContainer