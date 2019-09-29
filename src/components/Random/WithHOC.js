import React from 'react';
import withStorage from './withStorage';

class WithHOC extends React.Component {
  state = {
    userName: '',
    favMovie: ''
  }

  componentDidMount() {
    let userName = null;
    let favMovie = null;
    // console.log('check ',this.props.checkAvailability)

    if (this.props.check('userName')) {
      userName = this.props.load('userName');
    }
    if (this.props.check('favMovie')) {
      favMovie = this.props.load('favMovie');
    }


    if (!userName || !favMovie) {
      console.log('USER NAME ', !userName, !favMovie)
      this.slowAPI(2000)
        .then(res => {
          console.log('res ', res.userName, res.favMovie)
          this.props.save('userName', res.userName)
          this.props.save('favMovie', res.favMovie)
          this.setState( () => ({
            ...res
          }))

        })

    } else {
      this.setState({ userName, favMovie })
    }
  }

  slowAPI = (ms) => new Promise( (resolve, reject) => {
    setTimeout(()=>resolve({userName: 'apenchev', favMovie: 'speed'}),ms)
  })

  render() {
    const {userName, favMovie} = this.state;
    const loading = !userName || !favMovie;
    console.log('WithHOC state', this.state)
    return (
      <div>
        {loading ? 'loading...' :
          `User name is ${userName} and favorite movie is ${favMovie}`
        }
      </div>
    )
  }

}

export default withStorage(WithHOC)
