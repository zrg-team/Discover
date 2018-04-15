import { createAction } from 'redux-actions'

export const fetchStart = createAction('API_FETCH_START')
export const fetchSuccess = createAction('API_FETCH_SUCCESS')
export const fetchFailure = createAction('API_FETCH_FAILURE')

export const loadStart = createAction('LOADING_START')
export const loadEnd = createAction('LOADING_END')

export const setCurrentLocation = createAction('SET_CURRENT_LOCATION')
