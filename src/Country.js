import React from 'react'

function Country({ match }) {
  return (
    <div>
      <h3>{match.params.countryId}</h3>
      <img
        src={require(`./assets/${match.params.countryId}.png`)}
        width="20"
        alt=""
      />
    </div>
  )
}

export default Country
