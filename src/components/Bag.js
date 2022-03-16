import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import '../App.css'


class Bag extends Component {
    render() {
        return(
            <div>
                <button className="bagBtn">bag</button>
                <span className="bubble">
                    <BubbleAlert/>
                </span>
            </div>
        )
    }
}

export default Bag 