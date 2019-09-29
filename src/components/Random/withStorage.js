import React from 'react';

const withStorage = WrappedComponent => {

  class HOC extends React.Component {

    // state = {
    //   storeAvailability: false
    // }

    // componentDidMount() {
    //   this.checkAvailability()
    // }

    checkAvailability = (key) => {
      return localStorage.getItem(key)
      // const test = 'test';

      // try {
      //   localStorage.setItem(test, test)
      //   localStorage.removeItem(test);
      //   this.setState({ storeAvailability: true})
      // } catch(e) {
      //   this.setState({ storeAvailability: false})
      // }

    }

    save = (key,data) => {

      // if (this.state.storeAvailability) {
        localStorage.setItem(key,data)
      // }
    }

    remove = key => {
      // if (this.state.storeAvailability) {
        localStorage.removeItem(key)
      // }
    }

    load = key => {

      // if (this.state.storeAvailability) {
        return localStorage.getItem(key)
      // }

    }

    render() {
      console.log('hoc state ', this.state)
      return (
        <WrappedComponent
          {...this.props}
          load={this.load}
          save={this.save}
          remove={this.remove}
          check={this.checkAvailability}
        />
      )
    }

  }

  return HOC;
}

export default withStorage;
