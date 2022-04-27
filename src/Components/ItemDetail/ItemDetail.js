import "./ItemDetail.css";
import React, { useEffect, useState } from 'react';
import Search from "../Search/Search";
import { useParams } from "react-router-dom";


const ItemDetail = () => {    
    const [datos, setDatos] = useState([]);    
    const [texto, setTexto] = useState([]); 
    const {id} = useParams();   
 

    const description = async() => {
        try {
            const description = await fetch(`https://api.mercadolibre.com/items/${id}`)
            const datos = await description.json()  
                setDatos(datos)     
                //console.log(datos);
            
        } catch (error) {
            document.write(error," Hubo un error, intente mas tarde");
        }
    }

    const textProduct = async() => {
        const textProduct = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        const texto = await textProduct.json()
            setTexto(texto)
            //console.log(texto.plain_text)
    }


    useEffect(() => {
        description()
        textProduct()
    
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
                    <h2>$ {datos.price}</h2><br/>
                    <button className="comprar">Comprar</button>                    
                </div>                                    
                <div className="container-text-description">
                    <h2>Descripción del producto</h2>
                    <h3>{texto.plain_text}</h3>
                </div>
            </div>   
                  
        </>
    )
}

export default ItemDetail;