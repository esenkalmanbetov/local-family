import React from 'react'
import {
  Link
} from 'react-router-dom'

import './Kg.scss'

class Kg extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to Kyrgyzstan</h2>
        <div>
          <ul>
            <li>
              <Link to="/local-guides">Local guides</Link>
            </li>
            <li>
              <Link to="/local-families">Local families</Link>
            </li>
            <li>
              <Link to="/join-to-tours">Join to tours</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Kg