import I18n from 'i18n-js'
import React, { Component } from 'react'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Grow from 'material-ui/transitions/Grow'
import Slide from 'material-ui/transitions/Slide'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import '../modules/home/styles.css'
import Map from '../modules/home/containers/Map'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: undefined,
      additionMenu: false
    }
    this.handleMenuChange = this.handleMenuChange.bind(this)
    this.handleAdditionMenu = this.handleAdditionMenu.bind(this)
  }

  handleMenuChange (value) {
    console.log('value', value)
    this.setState({
      additionMenu: true
    })
  }

  handleAdditionMenu () {
    const { additionMenu } = this.state
    this.setState({
      additionMenu: !additionMenu
    })
  }

  render () {
    const { additionMenu } = this.state
    return (
      <div className='home-container'>
        <div className='top-map'>
          <Grow className='full-container' in>
            <Paper elevation={4}>
              <Map
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places'
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className='full-container' />}
                mapElement={<div style={{ height: `100%` }} />} />
            </Paper>
          </Grow>
        </div>
        <div className='bottom-navigation'>
          <BottomNavigation
            style={{ backgroundColor: '#363636' }}
            value
            // onChange={this.handleMenuChange}
            showLabels
          >
            <BottomNavigationAction value='recent' style={{ color: '#FFFFFF' }} label='Recents' icon={<RestoreIcon />} />
            <BottomNavigationAction value='favorist' style={{ color: '#FFFFFF' }} label='Favorites' icon={<FavoriteIcon />} />
            <BottomNavigationAction value='nearby' style={{ color: '#FFFFFF' }} label='Nearby' icon={<LocationOnIcon />} />
          </BottomNavigation>
        </div>
      </div>
    )
  }
}
