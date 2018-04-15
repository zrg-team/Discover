import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Notifications from 'react-notify-toast'
import Routes from '../routes'
import ProgressLoading from '../components/wigets/ProgressLoading'
import PageLoading from '../components/wigets/PageLoading'
import AppModal from '../components/wigets/AppModal'
import '../styles/common.css'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
      }
    }
  }
})
export default function Root ({ store, persistor, history }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='main-container'>
          <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
              <Routes store={store} />
            </MuiThemeProvider>
          </ConnectedRouter>
          <AppModal.Component global />
          <ProgressLoading.Component global />
          <PageLoading.Component type='bars' global />
          <Notifications global />
        </div>
      </PersistGate>
    </Provider>
  )
}
