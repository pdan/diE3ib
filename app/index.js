import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import './index.scss';

var app = document.getElementById('app');

ReactDOM.render(
  <div className="row">
    <div className="main large-6 large-centered columns">
      <App />
    </div>
  </div>
  , app);
