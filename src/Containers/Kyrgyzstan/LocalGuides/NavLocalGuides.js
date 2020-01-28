import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class NavGuides extends React.Component {

  render() {
    const { url } = this.props.match

    return (
      <div>
        <h2>Local Guides</h2>
        <h4>Lists</h4>
        <ul>
          <li>
            <Link to={`${url}/a`} >profile a</Link>
          </li>
          <li>
            <Link to={`${url}/b`} >profile b</Link>
          </li>
          <li>
            <Link to={`${url}/c`} >profile c</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(NavGuides)