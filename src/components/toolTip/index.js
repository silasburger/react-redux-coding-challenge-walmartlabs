import React, { PureComponent } from 'react';
import './style.css';

export default class ToolTip extends PureComponent {
  render() {
    return (
      <div className="tooltip">
        <button className="ui-button" data-desc={this.props.desc}>
          {this.props.title}
        </button>
      </div>
    );
  }
}
