import React from 'react';
import '../Item/ItemCSS/itemDetail.css'
import { CountCountainer } from '../Count/CountContainer';


export default function ItemDetail({getItem}){
    return (
        <>
        <div className='cardItem'>
        <div className='ImgCardItem'><img src={getItem.picture} alt={getItem.title}/></div>
        <div className='CardItem'>
           <h2 className='TitleCardItem'>{getItem.title}</h2> 
            <h4 className='DescriptionCardItem'>{getItem.description}</h4>
            <p className='DescriptionFullCardItem'>{getItem.descriptionFull}</p>
            <span className='PriceCardItem'>$ {getItem.price}.-</span>
            <br></br>
             <CountCountainer stock={6} initial={0}/>
        </div>
        </div>
        </>
    )
}