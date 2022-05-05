import "./Search.css";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemSearch from "../ItemSearch/ItemSearch";
import Home from "../Home/Home";
import { buscar, categoria} from "../../Services/Services";
import Spinner from "../Spinner/Spinner";

const Search = () => {
    const [info, setInfo] = useState([]);   
    const {texto} = useParams();    
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState([]);
    const [item, setItem] = useState("");



    useEffect(() => {
        buscar(texto).then(info =>{                        
        setInfo(info.results.slice(0,4));  
        setItem(info.results[0].category_id)  
        setLoading(false)          
        });        
        
    }, [texto]); //eslint-disable-line  
    
    
    useEffect(() => {
        const idCategoria = item
        categoria(idCategoria).then(category=>{
            setCategory(category)
        });
        
    }, [info]); // eslint-disable-line
    

            return(
                <> 
                    <Home/>
                    <div className="loading">{ loading && <Spinner/> }</div>              
                    {info.length > 0 && texto !== undefined ?
                    (
                        <ul>                     
                            <div className="container-title">{category.name}</div>                            
                        {info.map((item) => (
                            <ItemSearch item={item} key={item.id}/>                    
                        ))}     
                        </ul> 
                    )        
                    : (null)}   
                
                    </>
            )
}

export default Search;