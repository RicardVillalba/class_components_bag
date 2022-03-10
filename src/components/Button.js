import { Component } from "react";
import '../App.css'

class Button extends Component {
    render() {
        return(
            <button {...this.props} className="addBtn">add to cart</button>
        )
    }
}

export default Button