import React, { PureComponent } from 'react';
import './style.css';

export default class discountForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.applyDiscount(this.state.promoCode);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className="discount-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="promoCode" className="promoCode-label">
            Promo
          </label>
        </div>
        <div>
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            onChange={this.handleChange}
            value={this.state.promoCode}
          />
          <button className="apply-button">Apply</button>
        </div>
      </form>
    );
  }
}
