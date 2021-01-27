import React from 'react';
import './Item';
import '../Item/ItemCSS/itemlist.css';
import { CountCountainer } from '../Count/CountContainer';
import { Link } from 'react-router-dom';


export const ItemList = ({items}) => {
    return (
        <React.Fragment>
            <h1>Bienvenido</h1>
            <h3>Encontra acá tus accesorios</h3>
             <div className='divItems'>
             {items && items.map(items => <div className="liItems">
             
        <Link to={`/item/${items.id}`}>
            <img className="imgitems" src={items.picture} alt={items.title}/>
            <h4 key={items.title}>{items.title}</h4>
        </Link>

             <p key={items.description}>{items.description}</p>
             <span>${items.price}</span>
             <br></br>
             <CountCountainer stock={6} initial={0}/>
              </div> )}

             </div>

         </React.Fragment>
    )

};