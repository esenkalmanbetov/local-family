import React from 'react'
import {
  Link
} from 'react-router-dom'
import './LocalGuides.scss'

class LocalGuides extends React.Component {
  render() {
    return (
      <div>
        <h2>Local Guides</h2>
        <h4>Lists</h4>
        <ul>
          <li>
            <Link to="guide-profile">Profile A</Link>
          </li>
          <li>
            <Link>Profile B</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default LocalGuides