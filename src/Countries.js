import React from 'react'
import { Route, Link } from 'react-router-dom'
import L from 'react-loadable'

import MyLoadingComponent from './MyLoadingComponent'

const Country = L({
  loader: () => import('./Country'),
  loading: MyLoadingComponent
})

function Countries({ match }) {
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        <li>
          <Link to={`${match.url}/fr`}>FR</Link>
        </li>
        <li>
          <Link to={`${match.url}/sp`}>SP</Link>
        </li>
        <li>
          <Link to={`${match.url}/uk`}>UK</Link>
        </li>
        <li>
          <Link to={`${match.url}/br`}>BR</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:countryId`} component={Country} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a copuntry.</h3>}
      />
    </div>
  )
}

export default Countries
