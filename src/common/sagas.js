
import { all, takeEvery, select, takeLatest } from 'redux-saga/effects'
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  loadStart,
  loadEnd,
  setCurrentLocation } from './actions'
import PageLoading from './components/wigets/PageLoading'
import ProgressLoading from './components/wigets/ProgressLoading'
import { moduleSagas } from '../modules'
import discov from './reponsitories/discov'

function * onFetchStart ({ payload: { config } }) {
  yield ProgressLoading.show()
  // console.log('Fetch Start', config)
}

function * onFetchSuccess ({ payload: { response, config } }) {
  yield ProgressLoading.hide()
  // console.log('Fetch Success', config)
}

function * onFetchFailure ({ payload: { error, config } }) {
  yield ProgressLoading.hide()
  // Notification.error(error.message)
  console.error(error)
}

function * watchFetchStart () {
  yield takeEvery(fetchStart.toString(), onFetchStart)
}
function * watchFetchSuccess () {
  yield takeEvery(fetchSuccess.toString(), onFetchSuccess)
}
function * watchFetchFailure () {
  yield takeEvery(fetchFailure.toString(), onFetchFailure)
}

function * onLoadingChanged () {
  // TODO: Do something in redux when loading
  const isLoading = yield select(state => state.common.isLoading)
  const loadingCount = yield select(state => state.common.loadingCount)
  if (isLoading) {
    PageLoading.show()
  } else if (loadingCount === 0) {
    PageLoading.hide()
  }
}

function * watchLoadStart () {
  yield takeEvery(loadStart.toString(), onLoadingChanged)
}

function * watchLoadEnd () {
  yield takeEvery(loadEnd.toString(), onLoadingChanged)
}

function * watchChangeLocation () {
  yield takeLatest(setCurrentLocation.toString(), function * () {
    const location = yield select(state => state.common.location)
    console.log('>>>>>>>>discov', location)
    discov && discov.updateLocation(location)
  })
}

const commonSagas = [
  watchFetchStart(),
  watchFetchSuccess(),
  watchFetchFailure(),
  watchLoadStart(),
  watchLoadEnd(),
  watchChangeLocation()
]

export default getState => {
  function * rootSaga () {
    yield all([
      ...commonSagas,
      ...moduleSagas
    ])
  }
  return rootSaga
}
