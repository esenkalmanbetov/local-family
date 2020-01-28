import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class NavTours extends React.Component {

  render() {
    const { url } = this.props.match

    return (
      <div>
        <h2>Join Tours</h2>
        <h4>Lists</h4>
        <ul>
          <li>
            <Link to={`${url}/a`} >tour a</Link>
          </li>
          <li>
            <Link to={`${url}/b`} >tour b</Link>
          </li>
          <li>
            <Link to={`${url}/c`} >tour c</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(NavTours)