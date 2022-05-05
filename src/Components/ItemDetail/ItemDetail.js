import "./ItemDetail.css";
import React, { useEffect, useState } from 'react';
import Search from "../Search/Search";
import { useParams } from "react-router-dom";
import { description, textProduct, categoria } from "../../Services/Services";
import {Helmet} from "react-helmet";


const ItemDetail = () => {
    const [datos, setDatos] = useState([]);
    const [texto, setTexto] = useState([]);
    const { id } = useParams();
    const [category, setCategory] = useState([]);
    

    useEffect(() => {
        description(id).then(description=>{
            setDatos(description)
        });
        textProduct(id).then(texto=>{
            setTexto(texto)
        });

    }, [id]); // eslint-disable-line

        useEffect(() => {
            const idCategoria = datos.category_id
            categoria(idCategoria).then(category=>{
                setCategory(category)
            });

    }, [datos]); // eslint-disable-line
    
    
    return (
      <>
        <Search/> 
        <Helmet>
            <title>{datos.title}</title>    
            <meta name="description" content={datos.title}/>
        </Helmet>    
        <div className="title">
                <div className="container-title">                    
                        {category.name}                    
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
                        <div className="container-description-long">
                            <p className="description-long">{texto.plain_text}</p>
                        </div>
                    </div>
                </div>   
            </div>                     
        </>
    );
};

export default ItemDetail;