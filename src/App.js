import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './Nav'
import Routes from './Routes'

function BasicExample() {
  return (
    <Router>
      <Nav />
      <hr />
      <Routes />
    </Router>
  )
}

export default BasicExample
