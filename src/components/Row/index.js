import React, { PureComponent } from 'react';
// import propTypes from 'proptypes';
import './style.css';

export default class Row extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let style;
    if (this.props.discount === true) {
      style = {
        fontWeight: 'bold',
        color: 'red'
      };
    } else {
      style = {
        fontWeight: 'bold',
        color: 'black'
      };
    }
    return (
      <div className="row">
        <div className="title">{this.props.title}</div>
        <div style={style} className="figure">
          {this.props.discount ? '-' : ''}
          ${this.props.figure}
        </div>
      </div>
    );
  }
}

