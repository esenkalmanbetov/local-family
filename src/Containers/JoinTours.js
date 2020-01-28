import React from 'react'
import { Link } from 'react-router-dom'

import './JoinTours.scss'

class JoinTours extends React.Component {
  render() {
    return (
      <div>
        <h2>Join Tours</h2>
        <h4>Lists</h4>
        <ul>
          <li>
            <Link to="/tour-detail">tour1</Link>
          </li>
          <li>tour2</li>
        </ul>
      </div>
    )
  }
}

export default JoinTours