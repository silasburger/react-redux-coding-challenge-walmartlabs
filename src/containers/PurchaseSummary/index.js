import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from '../../components/Row';
import ExpandableItem from '../../components/ExpandableItem';
import DiscountForm from '../../components/DiscountForm';
import ProductDetails from '../../components/ProductDetails';
import { applyDiscount, fetchPurchaseData } from './actions';
import './style.css';

class PurchaseSummary extends Component {
  async componentDidMount() {
    try {
      await this.props.fetchPurchaseData();
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="purchase-summary">
        <Row title="Subtotal" figure={this.props.pricing.subtotal} />
        <Row
          title="Pickup savings"
          figure={this.props.pricing.savings}
          less={true}
        />
        {this.props.pricing.discount > 0 ? (
          <Row
            title="Discount"
            figure={this.props.pricing.discount}
            less={true}
          />
        ) : null}
        <Row title="Est. taxes and fees" figure={this.props.pricing.tax}>
          <div>(Based on {this.props.pricing.zip})</div>
        </Row>
        <hr />
        <Row title="Est. total" figure={this.props.pricing.total} />
        <ExpandableItem
          openPrefix={'See'}
          closePrefix={'Hide'}
          title={'item details'}
        >
          <ProductDetails />
        </ExpandableItem>
        <ExpandableItem
          openPrefix={'Apply'}
          closePrefix={'Hide'}
          title={'promo code'}
        >
          <DiscountForm applyDiscount={this.props.applyDiscount} />
        </ExpandableItem>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pricing: state.pricing,
    item: state.item
  };
}

export default connect(
  mapStateToProps,
  { applyDiscount, fetchPurchaseData }
)(PurchaseSummary);
