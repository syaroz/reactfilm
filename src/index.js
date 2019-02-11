import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App></App>, document.getElementById('root'));
serviceWorker.unregister();