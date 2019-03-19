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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="promoCode">Promo</label>
        <input
          type="text"
          id="promoCode"
          name="promoCode"
          onChange={this.handleChange}
          value={this.state.promoCode}
        />
        <button>Apply</button>
      </form>
    );
  }
}
