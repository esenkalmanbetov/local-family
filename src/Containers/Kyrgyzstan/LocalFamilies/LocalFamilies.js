import React from 'react'
import { withRouter } from 'react-router'
import {
  Switch,
  Route
} from 'react-router-dom'

import NavLocalFamilies from './NavLocalFamilies'
import FamilyDetail from './FamilyDetail'

class LocalFamilies extends React.Component {
  render() {
    const { path } = this.props.match

    return (
      <div>
        <Switch>
          <Route exact path={path} component={NavLocalFamilies} />
          <Route exact path={`${path}/:familyId`} component={FamilyDetail} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(LocalFamilies)