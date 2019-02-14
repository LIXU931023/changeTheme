import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import Header from './pages/header';
import Route from './router/index';
import './common/scss/index.scss';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <Route>
          <Pages />
        </Route>  
      </Provider> 
    );
  }
}

export default App;
