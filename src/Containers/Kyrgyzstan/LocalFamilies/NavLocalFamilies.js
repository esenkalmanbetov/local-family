import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class NavFamilies extends React.Component {

  render() {
    const { url } = this.props.match

    return (
      <div>
        <h2>Local Families</h2>
        <h4>Lists</h4>
        <ul>
          <li>
            <Link to={`${url}/a`} >Family a</Link>
          </li>
          <li>
            <Link to={`${url}/b`} >Family b</Link>
          </li>
          <li>
            <Link to={`${url}/c`} >Family c</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(NavFamilies)