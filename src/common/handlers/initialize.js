import I18n from 'i18n-js'
import moment from 'moment'
import { init as firebaseInit } from '../utils/firebase'
import { setCurrentLocation } from '../actions'
import { setUserLanguage } from '../../modules/option/actions'
import { DEFAULT_LANGUAGE } from '../configs'
import discov from '../reponsitories/discov'

I18n.defaultLocale = DEFAULT_LANGUAGE
I18n.fallbacks = true
I18n.translations = {
  en: require('../../assets/lang/en.json')
}

let locationCheck = null
function timeoutLocation (dispatch) {
  if (locationCheck) {
    clearTimeout(locationCheck)
  }
  locationCheck = setTimeout(() => {
    navigator.geolocation.getCurrentPosition(position => {
      dispatch &&
        dispatch(setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }))
    })
    timeoutLocation(dispatch)
  }, 30000)
}
export default async function (dispatch, options = {}) {
  try {
    let language = options.language
    if (!options.language) {
      language = DEFAULT_LANGUAGE
      dispatch && dispatch(setUserLanguage(DEFAULT_LANGUAGE))
    }
    I18n.locale = language
    moment.locale(language)
    await firebaseInit()
    if (navigator.geolocation) {
      timeoutLocation(dispatch)
    }
    await discov.init()
  } catch (error) {
    moment.locale(DEFAULT_LANGUAGE)
    dispatch && dispatch(setUserLanguage(DEFAULT_LANGUAGE))
  }
}
