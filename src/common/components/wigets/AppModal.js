import React, { Component } from 'react'
import Modal from 'material-ui/Modal'

class AppModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      modalProps: {},
      component: null
    }

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount () {
    const { global } = this.props
    if (global) {
      AppModal.instance = this
    }
  }

  componentWillUnmount () {
    const { global } = this.props
    if (global) {
      delete AppModal.instance
    }
  }

  open (component, modalProps) {
    this.setState({
      open: true,
      modalProps,
      component
    })
  }

  close () {
    this.setState({
      open: true,
      modalProps: {},
      component: null
    })
  }

  handleClose () {
    this.setState({ open: false })
  }

  render () {
    const { open, component, modalProps } = this.state
    return (
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={this.handleClose}
        {...modalProps}
      >
        {component}
      </Modal>
    )
  }
}

export default {
  Component: AppModal,
  show (component, props) {
    AppModal.instance &&
      AppModal.instance.open(component, props)
  },
  close () {
    AppModal.instance &&
      AppModal.instance.close()
  }
}
