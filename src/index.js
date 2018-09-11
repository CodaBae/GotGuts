import React from 'react';
import './index.css';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter> 
            <App2 /> 
        </BrowserRouter>), document.getElementById('root'));
    registerServiceWorker(); 
