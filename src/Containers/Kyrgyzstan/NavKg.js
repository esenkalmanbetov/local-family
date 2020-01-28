import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class NavKg extends React.Component {

  render() {
    const { url } = this.props.match

    return (
      <div>
        <h2>Welcome to Kyrgyzstan</h2>
        <div>
          <ul>
            <li>
              <Link to={`${url}/join-to-tours`} >Join to tours</Link>
            </li>
            <li>
              <Link to={`${url}/local-guides`} >Local guides</Link>
            </li>
            <li>
              <Link to={`${url}/local-families`} >Local families</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(NavKg)