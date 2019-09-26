import React from 'react'
import L from 'react-loadable'

import MyLoadingComponent from './MyLoadingComponent'

const Country = L({
  loader: () => import('./Country'),
  loading: MyLoadingComponent
})

function Countries() {
  const arr = [...Array(50).keys()].map(x => x + 1)

  return (
    <div>
      <h2>List</h2>
      {arr.map((el, i) => (
        <Country key={i} id={el} />
      ))}
    </div>
  )
}

export default Countries
