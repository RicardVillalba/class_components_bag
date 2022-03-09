import { Component } from "react";
import Product from './Product'
import '../App.css';

class Products extends Component{
    render() {
        const {products, addToTheBag} = this.props
      
        return(
            <div className='products'>
                {products.map(product => 
                    <Product
                    addToTheBag={addToTheBag}
                    key={product.name}
                    product={product}
                    />
                )}
            </div>
        )
    }
}

export default Products