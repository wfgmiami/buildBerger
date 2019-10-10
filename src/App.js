import React, { Component, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
  }


  shouldComponentUpdate(nextPropsNextState) {
    // console.log('[app.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    // console.log('[app.js] componentDidUpdate')
  }


  render() {
    // console.log('[App.js] render')

    return (
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
      </Layout>
    );

  }

}

export default App;


