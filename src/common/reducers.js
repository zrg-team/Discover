import { handleActions } from 'redux-actions'
import * as actions from './actions'

const updateFetching = (fetching, payload, upDown) => {
  const { config } = payload
  const key = config.key || config.url
  if (upDown < 0 && fetching[key] + upDown === 0) {
    delete fetching[key]
  } else {
    fetching[key] = (fetching[key] || 0) + upDown
  }
  return fetching
}

const defaultState = {
  fetching: {},
  loadingCount: 0,
  isLoading: false,
  location: {
    lat: 10.801747599999999,
    lng: 106.63679099999999
  },
  discov: null
}

const handlers = {
  [actions.fetchStart]: (state, action) => ({
    ...state,
    ...{ fetching: updateFetching(state.fetching, action.payload, 1) }
  }),
  [actions.fetchSuccess]: (state, action) => ({
    ...state,
    ...{ fetching: updateFetching(state.fetching, action.payload, -1) }
  }),
  [actions.fetchFailure]: (state, action) => ({
    ...state,
    ...{ fetching: updateFetching(state.fetching, action.payload, -1) }
  }),
  [actions.loadStart]: (state, action) => ({
    ...state,
    ...{
      loadingCount: state.loadingCount + 1,
      isLoading: true
    }
  }),
  [actions.loadEnd]: (state, action) => ({
    ...state,
    ...{
      loadingCount: state.loadingCount - 1,
      isLoading: state.loadingCount > 1
    }
  }),
  [actions.setCurrentLocation]: (state, action) => ({
    ...state,
    ...{
      location: action.payload
    }
  }),
  [actions.setDiscov]: (state, action) => ({
    ...state,
    ...{
      discov: action.payload
    }
  })
}

export default handleActions(handlers, defaultState)
