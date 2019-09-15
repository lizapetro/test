import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Main from './components/Main';
import Wallet from './components/Wallet';
import {Provider} from 'react-redux';
import {store} from './store/configStore';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Main}/>
        <Route path='/Wallet' component={Wallet}/>
      </BrowserRouter>
    </Provider>,
   document.getElementById('root'));
