import "./ItemDetail.css";
import React, { useEffect, useState } from 'react';
import Search from "../Search/Search";
import { useParams } from "react-router-dom";


const ItemDetail = () => {    
    const [datos, setDatos] = useState([]);    
    const [texto, setTexto] = useState([]); 
    const {id} = useParams();      
    const [category, setCategory] = useState([]);        
    
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
    
    const categoria = async() => {                     
            const idCategoria = datos.category_id
            //console.log(idCategoria);    
            const categoria = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${idCategoria}`)
            const category = await categoria.json()
                setCategory(category)                                                
                //console.log(category.filters[0].values[0].name);                                  
    }; 

    useEffect(() => {
        description()
        textProduct()
        categoria()
    
    }, [id]) // eslint-disable-line

    
    return(
        <>
        <Search/>     
        <div className="title">
                <div className="container-title">                    
                        {/* {category.filters?.[0].values?.[0].name} */}asdasd                    
                </div>
            </div>                
            <div className="description">
                <div className="container">
                    <div className="row-mid">
                        <div className="img-container">
                            <img className="image-detail" src={datos.pictures?.[0].url} alt={datos.title}></img>
                        </div>
                        <div className="container-name">
                            <p className="sale-quantity">{ `${datos?.condition === 'new' ? 'Nuevo' : 'Usado'}` } - {datos.sold_quantity} vendidos</p>
                            <h3 className="product-name">{datos.title}</h3>
                            <div className="product-price">$ {datos.price}</div>
                            <button className="comprar">Comprar</button>                    
                        </div>                    
                    </div>       
                    <div className="container-text-description">
                        <h2>Descripción del producto</h2><br/>
                        <p className="description-long">{texto.plain_text}</p>
                    </div>
                </div>   
            </div>                     
        </>
    )
}

export default ItemDetail;