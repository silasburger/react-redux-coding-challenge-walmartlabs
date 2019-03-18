import React from 'react';
import { connect } from 'react-redux';
import Row from '../../components/Row';
import ExpandableItem from '../../components/ExpandableItem';
import { applyDiscount } from '../actions/actionCreators';

class PurchaseSummary extends React.Component {
  render() {
    return (
      <div className="purchase-summary">
        <Row />
        <Row />
        <Row />
        <Row />
        <hr/>
        <ExpandableInformation />
        <ExpandableInformation />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    prices: state.prices,
    product: state.product
  };
}

const PurchaseSummaryContainer = connect(
  mapStateToProps,
  { applyDiscount }
)(PurchaseSummary);

export default PurchaseSummaryContainer;

export { PurchaseSummary };
