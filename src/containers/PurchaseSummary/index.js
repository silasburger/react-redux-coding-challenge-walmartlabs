import React, {Component} from 'react';
import { connect } from 'react-redux';
import Row from '../../components/Row';
import ExpandableItem from '../../components/ExpandableItem';
import { applyDiscount } from './actions';

class PurchaseSummary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

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

function mapStateToProps(state, ownProps) {
  return {
    prices: state.prices,
    product: state.product
  };
}

export default connect(  mapStateToProps, { applyDiscount })(PurchaseSummary);