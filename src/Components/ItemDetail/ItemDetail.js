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
            //console.log(datos);
    }


    useEffect(() => {
        description()
    
    }, [id]) // eslint-disable-line


    return(
        <>
        <Search/>        
        {datos.map(item => {
                    return <li key={item.id}>
            <div className="container-title">Electronica</div>
            <div className="container-detail">
                <img className="image-detail" src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2017/06/playa-sol.jpg?fit=960%2C638&ssl=1" alt="product"></img>
                <div className="container-name">
                    <h4>Nuevo-234 vendidos</h4><br/>
                    <h3>Sombrero de Oxford rojo</h3><br/>
                    <h2>$1999</h2>
                    <button className="comprar">Comprar</button>                    
                </div>                                    
                <div className="container-text-description">
                    <h2>Descripcion</h2>
                    <h3>Texto</h3>
                </div>
            </div>   
            </li>
                })}               
        </>
    )
}

export default ItemDetail;