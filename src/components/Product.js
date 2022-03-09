import { Component } from "react";
import '../App.css';

class Product extends Component {
    render() {
        const { product } = this.props
        return(
            <div className="product" >
                <div className="imgContainer">
                    <img className="img" src={product.img} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        )
    }
}

export default Product