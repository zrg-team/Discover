import React from 'react'
import { Route, Switch } from 'react-router'
import Page from './hocs/Page'
import Initial from './hocs/Initial'
import HomePage from '../pages/HomePage'

export default (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Initial} />
      <Route path='/home' component={Page(HomePage)} />
    </Switch>
  )
}
