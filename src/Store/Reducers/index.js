import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import FetchData from './FetchData'

export default combineReducers({ LoginReducer, FetchData })