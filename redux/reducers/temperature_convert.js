// convert Celsius to Fahrenheit
const Celsius_to_Fahrenheit = (celsius) => {
  return (celsius * 1.8 + 32).toFixed(2);
}

// convert Fahrenheit to Celsius
const Fahrenheit_to_Celsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

// convert temperature unit
const conversion = (state = {}) => {
  return state.temperatures.map(temperature => {
    if(temperature.unit !== state.referenceUnit){
      // not reference unit, convert it based on reference temperature
      return Object.assign({}, temperature, {
        value: eval(`${state.referenceUnit}_to_${temperature.unit}(${state.referenceValue})`)
      })
    } else {
      // reference temperature, just change the previous value in the store to current value
      return Object.assign({}, temperature, {
        value: state.referenceValue
      })
    }
  })
}

export default conversion;
