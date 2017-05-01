import React from 'react'
import TemperatureInput from './TemperatureInput.js'

const TemperatureInputList = ({temperatures, onTemperatureChange}) => (
  <div>
    {
      temperatures.map(temperature =>
        <TemperatureInput {...temperature} onTemperatureChange={onTemperatureChange} />
      )
    }
  </div>
)

export default TemperatureInputList
