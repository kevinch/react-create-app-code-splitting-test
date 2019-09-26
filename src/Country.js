import React from 'react'
import L from 'react-loadable'

import MyLoadingComponent from './MyLoadingComponent'

const images = require.context('./assets/48/', true)

const Crest = L({
  loader: () => import('./Crest'),
  loading: MyLoadingComponent
})

function Country({ id }) {
  let src = null

  try {
    src = images(`./${id}.png`)
  } catch (e) {
    console.log('not found', id)
  }

  if (src) {
    return (
      <div>
        <Crest src={src} />
      </div>
    )
  }
  return <div>not found: {id}</div>
}

export default Country
