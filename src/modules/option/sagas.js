import I18n from 'i18n-js'
import { takeEvery } from 'redux-saga/effects'
import moment from 'moment'
import { setUserLanguage } from './actions'

function * onChangeUserLanguage (action) {
  const lang = action.payload
  I18n.locale = lang
  moment.locale(lang)
  yield true
}

function * watchChangeUserLanguage () {
  yield takeEvery(setUserLanguage.toString(), onChangeUserLanguage)
}

export default [ watchChangeUserLanguage() ]
