import React, { PureComponent } from 'react';
import './style.css';

export default class Row extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.toolTip ? this.props.toolTip : <div className="title">{this.props.title}{this.props.children}</div>}
        <div style={this.props.less === true ? {color:'red'} : {color: 'black'}} className="figure">
          {this.props.less ? '-' : ''}
          ${this.props.figure}
        </div>
      </div>
    );
  }
}

