import crema from './assets/products/crema.jpg'
import miel from './assets/products/miel.jpg'
import mermelada from './assets/products/mermelada.jpg'
import stevia from './assets/products/stevia.jpg'

const products = [
    {
        id: '1',
        name: 'Crema 1',
        price: 20,
        category: 'crema',
        img: crema,
        stock: 25,
        description: 'Pequeña Descripcion De La Crema 1'

    },

    {
        id: '2',
        name: 'Crema 2',
        price: 23,
        category: 'crema',
        img: crema,
        stock: 35,
        description: 'Pequeña Descripcion De La Crema 2'

    },

    {
        id: '3',
        name: 'Crema 3',
        price: 25,
        category: 'crema',
        img: crema,
        stock: 13,
        description: 'Pequeña Descripcion De La Crema 3'

    },

    {
        id: '4',
        name: 'Miel 1',
        price: 14,
        category: 'miel',
        img: miel,
        stock: 24,
        description: 'Pequeña Descripcion De La Miel 1'

    },

    {
        id: '5',
        name: 'Miel 2',
        price: 19,
        category: 'miel',
        img: miel,
        stock: 9,
        description: 'Pequeña Descripcion De La Miel 2'

    },

    {
        id: '6',
        name: 'Miel 3',
        price: 26,
        category: 'miel',
        img: miel,
        stock: 13,
        description: 'Pequeña Descripcion De La Miel 3'

    },

    {
        id: '7',
        name: 'Mermelada 1',
        price: 25,
        category: 'mermelada',
        img: mermelada,
        stock: 15,
        description: 'Pequeña Descripcion De La Mermelada 1'

    },
    {
        id: '8',
        name: 'Mermelada 2',
        price: 28,
        category: 'mermelada',
        img: mermelada,
        stock: 30,
        description: 'Pequeña Descripcion De La Mermelada 2'

    },
    {
        id: '9',
        name: 'Mermelada 3',
        price: 22,
        category: 'mermelada',
        img: mermelada,
        stock: 12,
        description: 'Pequeña Descripcion De La Mermelada 3'

    },

    {
        id: '10',
        name: 'Stevia 1',
        price: 15,
        category: 'stevia',
        img: stevia,
        stock: 40,
        description: 'Pequeña Descripcion De La Stevia 1'

    },
    {
        id: '11',
        name: 'Stevia 2',
        price: 20,
        category: 'stevia',
        img: stevia,
        stock: 20,
        description: 'Pequeña Descripcion De La Stevia 2'

    },
    {
        id: '12',
        name: 'Stevia 3',
        price: 25,
        category: 'stevia',
        img: stevia,
        stock: 15,
        description: 'Pequeña Descripcion De La Stevia 3'

    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) =>{
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}


