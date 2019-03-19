import React, { PureComponent } from 'react';
import './style.css';

export default class ItemDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div className="item-details">
    <img className="item-picture" src={this.props.pictureURL} alt={this.props.itemName}/>
    <div className="item-name">{this.props.itemName}</div>
    <div className="item-price">${this.props.price}</div>
    <div className="item-quantity">Qty:{this.props.quantity}</div>
    <div className="item-previous-price">${this.props.prevPrice}</div>
    </div>;
  }
}
