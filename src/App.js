import React, { Component, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }


  componentDidMount() {
    console.log('[app.js] componentDidMount')
  }

  shouldComponentUpdate(nextPropsNextState) {
    console.log('[app.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[app.js] componentDidUpdate')
  }


  render() {
    console.log('[App.js] render')

    return (
      <Layout>
        <BurgerBuider/>
      </Layout>
    );

  }

}

export default App;


