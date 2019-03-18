import React, {Component} from 'react';
import { connect } from 'react-redux';
import Row from '../../components/Row';
import ExpandableItem from '../../components/ExpandableItem';
import { applyDiscount, fetchPurchaseData } from './actions';

class PurchaseSummary extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      await this.props.fetchPurchaseData();
    } catch(err) {
      console.error(err);
    }
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
    pricing: state.pricing,
    item: state.item
  };
}

export default connect(  mapStateToProps, { applyDiscount, fetchPurchaseData })(PurchaseSummary);