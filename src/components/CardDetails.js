import { Component } from "react";
import '../App.css'

class CardDetails extends Component {
    render(){
        const {bag} = this.props
        console.log(bag)
        return(
            <div className="cardDetails">
                <p className="bagTitle" >bag</p>
                <ul className="ulCardDetails">
                    {bag.map(x => 
                    <li className="liCardDetails" key={x.name}>
                        <img className="bagDetailsImg" src={x.img} alt={x.name} width='100%' height='auto' />
                        <span>{x.name} x ({x.quantity})</span>
                    </li> )}
                    
                </ul>
            </div>
        )
    }
}

export default CardDetails