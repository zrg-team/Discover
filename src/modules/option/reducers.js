import { handleActions } from 'redux-actions'
import * as actions from './actions'

const defaultState = {
  language: undefined
}

const handlers = {
  [actions.setUserLanguage]: (state, action) => {
    return {
      ...state,
      language: action.payload
    }
  }
}

export default handleActions(handlers, defaultState)
