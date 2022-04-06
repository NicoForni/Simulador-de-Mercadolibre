import "./ItemSearch.css";

const ItemSearch = () => {
    
    
    return(<>
            <div className="container-title">Electronica - otra cosa</div>                
            <div className="container-items">
                <div className="container-item">                                     
                    <img className="container-image" src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2017/06/playa-sol.jpg?fit=960%2C638&ssl=1" alt="item" ></img>
                    <div className="container-description"><h2>$1999</h2><br/>descripcion larga del articulo</div>
                    <div className="container-place">Lugar</div>
                </div>
            </div>
            </>
    )
}

export default ItemSearch;