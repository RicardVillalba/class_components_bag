import { Component } from "react";
import Logo from './Logo'
import Bag from './Bag'
import '../App.css'
class Navbar extends Component {
    render(){
        const { bag } = this.props
        return(
            <nav className="nav">
                <Logo/>
                <Bag bag={bag} />
            </nav>
        )
    }
}

export default Navbar