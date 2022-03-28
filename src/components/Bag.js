import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CardDetails from "./CardDetails";
import "../App.css";

class Bag extends Component {
  render() {
    const { bag, bagVisible, showBag } = this.props;
    const quantity = bag.reduce((acc, el) => acc + el.quantity, 0);
    return (
      <div>
        <button onClick={showBag} className="bagBtn">
          bag
        </button>
        {bagVisible === true ? <CardDetails bag={bag}/> : null }
        <span className="bubble">
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>
      </div>
    );
  }
}

export default Bag;
