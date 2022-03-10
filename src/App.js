import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout';
import Title from './components/Title';
import './App.css';

class App extends Component {

  state = {
    products: [
        {name: 'outfit 1', price: 100, img:'/products/IMG_1694.JPG'},
        {name: 'outfit 2', price: 130, img:'/products/IMG_1695.JPG'},
        {name: 'outfit 3', price: 180, img:'/products/IMG_1696.JPG'}
      ]
    
  }

  render() {
    return(
      <div>
        <Layout>
        <Title/>
        <Products
        addToTheBag={() => console.log('adding to the bag')}
        products ={this.state.products}
        />
        </Layout>
      </div>
    )
  }
}

export default App;
