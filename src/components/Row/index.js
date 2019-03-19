import React, { PureComponent } from 'react';
import './style.css';

export default class Row extends PureComponent {
  render() {
    return (
      <div className={this.props.total ? 'row grand-total' : 'row'}>
        {this.props.toolTip ? (
          this.props.toolTip
        ) : (
          <div className="row-title">
            {this.props.title}
            {this.props.children}
          </div>
        )}
        <div
          style={
            this.props.less === true ? { color: 'red' } : { color: 'black' }
          }
          className="row-figure"
        >
          {this.props.less ? '-' : ''}${this.props.figure}
        </div>
      </div>
    );
  }
}
