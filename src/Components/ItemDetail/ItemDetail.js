import "./ItemDetail.css";
import React, { useEffect, useState } from 'react';
import Search from "../Search/Search";
import { useParams } from "react-router-dom";


const ItemDetail = () => {    
    const [datos, setDatos] = useState([]);     
    const {id} = useParams();   
 

    const description = async() => {
        const description = await fetch(`https://api.mercadolibre.com/items/${id}`)
        const datos = await description.json()  
            setDatos(datos)     
            console.log(datos);
    }



    useEffect(() => {
        description()
    
    }, [id]) // eslint-disable-line


    return(
        <>
        <Search/>                
            <div className="container-title">Electronica</div>
            <div className="container-detail">
                <img className="image-detail" src={datos.thumbnail} alt={datos.title}></img>
                <div className="container-name">
                    <h4>{ `${datos?.condition === 'new' ? 'Nuevo' : 'Usado'}` } {datos.sold_quantity} vendidos</h4><br/>
                    <h3>{datos.title}</h3><br/>
                    <h2>$ {datos.price}</h2>
                    <button className="comprar">Comprar</button>                    
                </div>                                    
                <div className="container-text-description">
                    <h2>Descripcion</h2>
                    <h3>Texto</h3>
                </div>
            </div>   
                  
        </>
    )
}

export default ItemDetail;