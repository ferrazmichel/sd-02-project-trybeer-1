import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context';
import App from './App';
import './App.css';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
