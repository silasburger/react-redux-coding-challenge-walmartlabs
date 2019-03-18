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
        <ExpandableItem />
        <ExpandableItem />
      </div>
    );
  }
}

export default PurchaseSummaryContainer;

export { PurchaseSummary };
