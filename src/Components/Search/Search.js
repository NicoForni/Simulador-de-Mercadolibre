import "./Search.css";
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);    

    const buscar = async() => {
        const user = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${text}`)
        const data = await user.json()
        setData(data.results.slice(0,4));       
        //console.log(data.results);
    }

    useEffect(() => {
      buscar()
    
    }, [text]) //eslint-disable-line
    
    

    return(<>
            <div className="container">
                <img src="/images/Logo_ML@2x.png.png" className="logo" alt="logo"></img>
                <input className="input" placeholder="Nunca dejes de buscar" name="textSearch" onChange={e => setText(e.target.value)}></input>
                <div className="background">
                    <img onClick={buscar} src="/images/ic_Search@2x.png.png" className="lupa" id="lupa" alt="icon"></img>
                </div>
            </div>  
            {data.length > 0 ?
            (
                <ul>
                {data.map(item => {
                    return <li key={item.id}>
                    <div className="container-items">                                                     
                        <img className="container-image" src={item.thumbnail} alt="product" ></img>
                        <div className="container-description">
                            <h2>$ {item.price}</h2> {item.shipping.free_shipping === true && (<img className="shipping" src="/images/ic_shipping.png" alt="shipping"></img>) }
                            <br/>{item.title}</div>                
                        <div className="container-place">{item.address.state_name}</div>                                 
                    </div>  
                    </li>
                })} 
                </ul>            
            )        
            : (null)} 
            </>
    )
}

export default Search;