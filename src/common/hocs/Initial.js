import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import initialize from '../handlers/initialize'

class Initial extends PureComponent {
  async componentDidMount () {
    const { dispatch, options } = this.props
    try {
      await initialize(dispatch, options || {})
      dispatch(push('/home'))
    } catch (error) {
      console.log('Fatal Error. Cannot Initialize.', error)
    }
  }

  render () {
    return (
      <div />
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  dispatch
})

const mapStateToProps = state => ({
  options: state.options
})

export default connect(mapStateToProps, mapDispatchToProps)(Initial)
