import "./Search.css";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ItemSearch from "../ItemSearch/ItemSearch";


const Search = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);        

    const buscar = async() => {
        try {
            const user = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${text}`)
            const data = await user.json()                
                setData(data.results.slice(0,4));       
                //console.log(data.results);                
        } catch (error) {
            document.write(error," Hubo un error, intente mas tarde");                    
        }                
    };

    useEffect(() => {
        buscar()                                           
    
    }, []) //eslint-disable-line
    
  

    return(<>
             <div className="container">
                <Link to={"/"}> <img src="/images/Logo_ML@2x.png.png" className="logo" alt="logo"></img></Link>
                <input className="input" placeholder="Nunca dejes de buscar" name="textSearch" onChange={e => setText(e.target.value)}></input>
                <div className="background">
                    <img onClick={buscar} src="/images/ic_Search@2x.png.png" className="lupa" id="lupa" alt="icon"></img>
                </div>
            </div>  
            {data.length > 0 ?
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