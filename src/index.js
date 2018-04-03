import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {createBrowserHistory} from 'history'
import { Provider } from 'react-redux'
import {Route ,Router } from 'react-router'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import  registerServiceWorker from './registerServiceWorker'

const history = createBrowserHistory()
ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="home" component={App}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();
