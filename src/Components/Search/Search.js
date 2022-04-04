import "./Search.css";

const Search = () => {
    
    return(
            <div className="container">
                <img src="/images/Logo_ML@2x.png.png" className="logo" alt="logo"></img>
                <input className="input" placeholder="Nunca dejes de buscar"></input>
                <div className="background">
                    <img src="/images/ic_Search@2x.png.png" className="lupa" id="lupa" alt="icon"></img>
                </div>
            </div>
    )
}

export default Search;