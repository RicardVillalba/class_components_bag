import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import '../App.css'


class Bag extends Component {
    render() {
        const {bag} = this.props
        const quantity = bag.reduce((acc, el) => acc + el.quantity, 0)
        return(
            <div>
                <button className="bagBtn">bag</button>
                <span className="bubble">
                    {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
                </span>
            </div>
        )
    }
}

export default Bag 