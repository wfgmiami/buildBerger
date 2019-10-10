import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-83c3e.firebaseio.com/'
})

export default instance;
