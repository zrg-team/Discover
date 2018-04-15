import { createAction } from 'redux-actions'
import { MODULE_NAME } from './models'

export const setUserLanguage = createAction(`${MODULE_NAME}_SET_USER_LANGUAGE`)
