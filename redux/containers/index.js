import {setReferenceUnit, setReferenceValue, convertTemperature} from '../actions/index.js'
import { connect } from 'react-redux'
import TemperatureInputList from '../components/TemperatureInputList.js'

const mapStateToProps = (state) => {
  return {
    // temperature value to be displayed in input box
    temperatures: state.temperatures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTemperatureChange: (unit, value) => {
      // action dispatched when user changed value in input box
      dispatch(setReferenceUnit(unit))
      dispatch(setReferenceValue(value))
      dispatch(convertTemperature())
    }
  }
}

const TemperatureContainer = connect(mapStateToProps, mapDispatchToProps)(TemperatureInputList)

export default TemperatureContainer
