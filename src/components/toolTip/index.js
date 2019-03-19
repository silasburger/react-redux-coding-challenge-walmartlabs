import React, { PureComponent } from 'react';
import './style.css';

export default class ToolTip extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.makeVisible = this.makeVisible.bind(this);
  }

  makeVisible() {
    this.setState(st => ({ visible: !st.visible }));
  }

  componentDidMount() {
    // document.addEventListener('click', )
  }

  componentWillUnmount() {}

  render() {
    console.log(this.props);
    return (
      <div className="tooltip">
        <button className="ui-button" data-desc={this.props.desc}>
          {this.props.title}
        </button>
      </div>
    );
  }
}
