import { Component } from "react";
import Logo from "./Logo";
import Bag from "./Bag";
import "../App.css";
class Navbar extends Component {
  render() {
    const { bag, bagVisible, showBag } = this.props;
    return (
      <nav className="nav">
        <Logo />
        <Bag bag={bag} bagVisible={bagVisible} showBag={showBag} />
      </nav>
    );
  }
}

export default Navbar;
