import { connect } from 'react-redux'
import Map from '../components/Map'

const mapDispatchToProps = (dispatch, props) => ({
})

const mapStateToProps = state => ({
  location: state.common.location
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)
