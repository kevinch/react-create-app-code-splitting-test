import React from 'react'
import { Route } from 'react-router-dom'
import L from 'react-loadable'

import MyLoadingComponent from './MyLoadingComponent'

const Home = L({
  loader: () => import('./Home'),
  loading: MyLoadingComponent
})
const About = L({
  loader: () => import('./About'),
  loading: MyLoadingComponent
})
const Countries = L({
  loader: () => import('./Countries'),
  loading: MyLoadingComponent
})

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/countries" component={Countries} />
    </>
  )
}

export default Routes
