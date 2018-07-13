import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import createHistory from 'history/createHashHistory'
// const history = createHistory({
//
// });

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
