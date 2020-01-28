import React from 'react'
import { withRouter } from 'react-router'
import {
  Switch,
  Route,
} from 'react-router-dom'

import NavKg from './NavKg'
import JoinTours from './JoinTours/JoinTours'
import LocalGuides from './LocalGuides/LocalGuides'
import LocalFamilies from './LocalFamilies/LocalFamilies'

import './Kg.scss'

class Kg extends React.Component {

  render() {
    const { path } = this.props.match

    return (
      <div>
        <Switch>
          <Route exact path={path} component={NavKg} />
          <Route path={`${path}/join-to-tours`} component={JoinTours} />
          <Route path={`${path}/local-families`} component={LocalFamilies} />
          <Route path={`${path}/local-guides`} component={LocalGuides} />
        </Switch>
      </div>
    )
  }
}


export default withRouter(Kg)