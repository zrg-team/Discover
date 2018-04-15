import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import MainView from './common/hocs/MainView'
import store, { history } from './common/store'
import registerServiceWorker from './registerServiceWorker'

render(
  <AppContainer>
    <MainView {...store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)
registerServiceWorker()
