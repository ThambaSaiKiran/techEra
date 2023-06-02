import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  render() {
    const {apiStatus} = this.state
    return <button>Hello</button>
  }
}

export default Home
