import optionReducers from './option/reducers'

import optionSagas from './option/sagas'

import { MODULE_NAME as OPTION_MODULE } from './option/models'

export const moduleReducers = {
  [OPTION_MODULE]: optionReducers
}

export const moduleSagas = [
  ...optionSagas
]
