import React from 'react'

const Weather = ({ data }) => {
  const { name, main, weather, wind } = data
  const weatherDesc = (
    <div>
      <p>Weather description: </p>
      { weather.map(({ description }, id ) => {
          return <p key={id}>{description}</p>
        })
      }
    </div>
  )

  const { humidity, temp } = main
  const { speed } = wind
  const tempIndex = (
    <div>
      <p>
        {`The current tempurature is ${temp}`}
        <span>&#8457;</span>
        {` , ${humidity}`}
        <span>&#37;</span> 
        {` humidity with a wind speed of ${speed} mph.`}
      </p>
    </div>
  )
  
  return (
    <div>
      <h2>{name}</h2>
      { weatherDesc }
      { tempIndex }
    </div>
  )
}

export default Weather