// action to return the reference temperature unit based on input box changed by user
export const setReferenceUnit = (u) => {
  return {
    type: 'SET_REFERENCE_UNIT',
    referenceUnit: u
  }
}

// action to return temperature value entered by user
export const setReferenceValue = (v) => {
  return {
    type: 'SET_REFERENCE_VALUE',
    referenceValue: v
  }
}

// action to convert temperature unit
export const convertTemperature = () => {
  return {
    type: 'CONVERT_TEMPERATURE'
  }
}
