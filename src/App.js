import { Component } from 'react';
import Navbar from './components/Navbar'
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
      ],
    bag: []
  }

  addToTheBag = (product) => {
    const { bag } = this.state
    if(bag.find(x => x.name === product.name)){
      const newBag = bag.map(x => x.name === product.name
      ? ({
       ...x,
       quantity: x.quantity + 1 
      })
      :x)
      return this.setState({bag: newBag})
    }
    return this.setState({
      bag: this.state.bag.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  render() {
    return(
      <div>
        <Navbar bag={this.state.bag}/>
        <Layout>
        <Title/>
        <Products
        addToTheBag={this.addToTheBag}
        products ={this.state.products}
        />
        </Layout>
      </div>
    )
  }
}

export default App;
