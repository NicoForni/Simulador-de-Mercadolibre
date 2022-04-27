import "./ItemSearch.css";
import { Link } from "react-router-dom";


const ItemSearch = ({item}) => {    
   

    return(
        <>            
            <div className="container-items">                                                                           
                <Link to={`/items/${item.id}`}><img className="container-image" src={item.thumbnail} alt="product" ></img></Link>
                    <div className="container-description">
                        <h2>$ {item.price}</h2> {item.shipping.free_shipping === true && (<img className="shipping" src="/images/ic_shipping.png" alt="shipping"></img>) }
                        <br/>{item.title}</div>                
                    <div className="container-place">{item.address.state_name}</div>                                                         
            </div>                          
                       
                                     
        </>
    )
}

export default ItemSearch;