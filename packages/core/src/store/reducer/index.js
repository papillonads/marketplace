import { combineReducers } from 'redux'
import { API_SET_AUTHENTICATION } from '../action/actionTypes'
import { apiSetAuthentication } from './api'

export const getAppReducer = () =>
  combineReducers({
    context: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    api: (state = {}, action) => {
      switch (action.type) {
        case API_SET_AUTHENTICATION:
          return apiSetAuthentication(state, action)
        default:
          return state
      }
    },
    ui: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
  })
