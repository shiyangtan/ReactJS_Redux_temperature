import React from 'react'

const TemperatureInput = ({onTemperatureChange, unit, value}) => (
  <div>
    <label htmlFor={unit}>{unit}</label>
    <input
      type="number"
      id={unit}
      value={value}
      onChange={(e) => onTemperatureChange(e.target.id, e.target.value)} 
    />
  </div>
)

export default TemperatureInput
