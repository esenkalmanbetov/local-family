import React from 'react'
import { withRouter } from 'react-router'

class GuideDetail extends React.Component {
  render() {

    const { guideId } = this.props.match.params

    return (
      <div>
        <h3>This is single Guide detail page</h3>
        <h2>welcome to Profile {guideId} </h2>
      </div>
    )
  }
}

export default withRouter(GuideDetail)