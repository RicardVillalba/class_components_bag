import { Component } from "react";
import Logo from './Logo'
import Bag from './Bag'
import '../App.css'
class Navbar extends Component {
    render(){
        return(
            <nav className="nav">
                <Logo/>
                <Bag/>
            </nav>
        )
    }
}

export default Navbar