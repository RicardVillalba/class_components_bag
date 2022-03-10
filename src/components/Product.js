import { Component } from "react";
import Button from "./Button";
import '../App.css';

class Product extends Component {
    render() {
        const { product, addToTheBag } = this.props
        return(
            <div className="product" >
                <div className="imgContainer">
                    <img className="img" src={product.img} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button
                onClick={() => addToTheBag(product)}
                />
            </div>
        )
    }
}

export default Product