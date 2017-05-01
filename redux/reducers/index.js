import conversion from './temperature_convert.js'

const initialState = {
  referenceUnit: 'Celsius',
  referenceValue: 100,
  temperatures: [
    {
      unit: 'Celsius',
      value: 100
    },
    {
      unit: 'Fahrenheit',
      value: 212
    }
  ]
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REFERENCE_UNIT':
      return Object.assign({}, state, {referenceUnit: action.referenceUnit})
    case 'SET_REFERENCE_VALUE':
      return Object.assign({}, state, {referenceValue: action.referenceValue})
    case 'CONVERT_TEMPERATURE':
      return Object.assign({}, state, {temperatures: conversion(state)})
    default:
      return state
  }
}

export default AppReducer
