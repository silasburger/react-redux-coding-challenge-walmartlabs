import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from '../../components/Row';
import ExpandableItem from '../../components/ExpandableItem';
import DiscountForm from '../../components/DiscountForm';
import ItemDetails from '../../components/ItemDetails';
import ToolTip from '../../components/ToolTip';
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
            toolTip={
              <ToolTip
                title="Pickup savings"
                desc="Picking up your order in the store helps cut costs, and we pass the savings on to you."
              />
            }
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
          <Row
            total={true}
            title="Est. total"
            figure={this.props.pricing.total}
          />
        <ExpandableItem
          openPrefix={'See'}
          closePrefix={'Hide'}
          title={'item details'}
        >
          <ItemDetails {...this.props.item} />
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
