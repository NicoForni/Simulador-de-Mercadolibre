import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Home = () => {
    const [texto, setTexto] = useState("");     
      

    return(<>
            <header>
                <div className="container">
                    <Link to={"/"}> <img src="/images/Logo_ML@2x.png.png" className="logo" alt="logo"></img></Link>
                    <input className="input" placeholder="Nunca dejes de buscar" name="textSearch" onChange={e => setTexto(e.target.value)}></input>
                    <div className="background">
                    <Link to={`/${texto}`}> <img src="/images/ic_Search@2x.png.png" className="lupa" id="lupa" alt="icon"></img></Link>
                    </div>
                </div>    
            </header>          
            </>
    )
}

export default Home;