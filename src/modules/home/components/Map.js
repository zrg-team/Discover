import React, { Component } from 'react'
import I18n from 'i18n-js'
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require('react-google-maps')

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  render () {
    const { location } = this.props
    if (!location) {
      return null
    }
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={location}
        defaultOptions={{}}
        center={location}
      >
        <Marker
          position={location}
        />
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(Map))
