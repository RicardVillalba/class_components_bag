import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CardDetails from "./CardDetails";
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
                <CardDetails bag={bag} />
            </div>
        )
    }
}

export default Bag 