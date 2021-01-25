import React, {useState, useEffect} from 'react';
import './home.css'
import {ItemList} from '../Item/ItemList'
import {items} from '../Item/Item'




 export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ()
    
    useEffect (() => { 
    const Item = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
    
        Item.then(response => {
            console.log(response)
            setProducts(response)
        })
    }, [])




return (
    <React.Fragment>
    <div>
        <ItemList items={products}/>
    </div>
    </React.Fragment>
)
}