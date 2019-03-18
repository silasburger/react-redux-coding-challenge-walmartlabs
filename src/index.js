import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import PurchaseSummaryContainer from './containers/PurchaseSummary';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <Provider>
        <PurchaseSummaryContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
