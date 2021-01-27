import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const itemList = [
    {
        id: 11111,
        title: "Aritos Dorados",
        price: 350,
        picture: "https://http2.mlstatic.com/D_NQ_NP_850590-MLA44104247697_112020-O.webp",
        description: "Hermoso aritos dorados, combinan con todo",
        descriptionFull:"Caracteristicas: Aro: Acero Quirurgico/ Color: Dorado/ Medidas: 4mm(grosor) 1,3 cm(largo)/ Unisex/ Apto para uso en el Agua",
        categoryId: "Aritos"
    },
    {
        id: 11112,
        title: "Billetera",
        price: 550,
        picture: "https://http2.mlstatic.com/D_NQ_NP_630246-MLA42517169731_072020-O.webp",
        description: "Billetera para hombres, comoda con mucho lugar de guardado",
        categoryId: "Billetera"
    },
    {
        id: 11113,
        title: "Gorra negra",
        price: 400,
        picture: "https://http2.mlstatic.com/D_NQ_NP_967004-MLA42484412617_072020-O.webp",
        description: "Que el sol no te encuentre desprevenido, gorra fresca y comoda",
        categoryId:"Gorra"
    },
    {
        id: 11114,
        title: "Pulsera",
        price:  480,
        picture: "https://http2.mlstatic.com/D_NQ_NP_757540-MLA40584347501_012020-O.webp",
        description: "Excelente accesorio, adaptable a cualquier medida de muñeca. De uso cómodo, ideal para darle personalidad y estilo a tu look",
        categoryId:"Oferta"
    },
    {
        id: 11115,
        title: "Collar Yin Yang, 2 en 1",
        price: 1550,
        picture: "https://http2.mlstatic.com/D_NQ_NP_805572-MLA32969782859_112019-O.webp",
        description: "Dije de acero quirurgico de 3 x 3 cm, cadena de Acero quirurgico de 50 cm de largo. Unisex",
        categoryId: "Oferta"
    },
    {
        id: 11116,
        title: "Reloj Acero Negro",
        price: 2400,
        picture: "https://http2.mlstatic.com/D_NQ_NP_813597-MLA40392597512_012020-O.webp",
        description: "Prepárate para estar a la vanguardia con este reloj de diseño novedoso y que te ofrece lo clásico del movimiento de las agujas.",
        categoryId:"Oferta"

    },
]

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    
    useEffect(() => {

        const call = new Promise((resolve, reject) => {
            setTimeout (() => {

                resolve(itemList)
            },2000)
        })

        call.then(response => {
            console.log(response)
            setItem(response[0])
        })

    }, [])

    return(<><ItemDetail getItem={item}/></>)
}
