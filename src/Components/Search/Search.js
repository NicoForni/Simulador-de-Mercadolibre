import "./Search.css";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemSearch from "../ItemSearch/ItemSearch";
import Home from "../Home/Home";


const Search = () => {
    const [data, setData] = useState([]);   
    const {texto} = useParams();    
    const [loading, setLoading] = useState(true)

    const buscar = async() => {
        try {
            const user = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${texto}`)
            const data = await user.json()      
                setLoading(false)          
                setData(data.results.slice(0,4));       
                //console.log(data.results);                
        } catch (error) {
            document.write(error," Hubo un error, intente mas tarde");                    
        }                
    };
    

    useEffect(() => {
        buscar()                                           

    }, [texto]) //eslint-disable-line
      

    return(<> 
            <Home/>
            <div className="loading">{loading && <h2>Loading products...</h2>  }</div>              
            {data.length > 0 && texto !== undefined ?
            (
                <ul>                     
                    <div className="container-title">Electronica - subcategoria - modelo</div>
                {data.map((item) => (
                    <ItemSearch item={item} key={item.id} />                    
                ))}     
                </ul> 
            )        
            : (null)}   
           
            </>
    )
}

export default Search;