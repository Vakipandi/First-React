import { useEffect, useState } from 'react'
import styles from './itemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { getProducts , getProductByCategory} from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        asyncFunc( categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[ categoryId])
    return (
        <div>
            <h1 className={styles.welcome}>{greeting}</h1>
            <ItemList products = { products } />
        </div>
    )
}

export default ItemListContainer