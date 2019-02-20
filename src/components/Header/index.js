import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin, handleLogout } from './store/actions'

class header extends Component {

  render() {
    const { login, handleLogin, handleLogout } = this.props
    return(
      <div>
        <Link to='/'>home</Link>
        <br />
        { login ? <Fragment>
        <div onClick={handleLogout}>log out</div>
        <br/>
        <Link to='/translation'>translation list</Link>
      </Fragment> : <div onClick={handleLogin}>login</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.header.login
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => dispatch(handleLogin()),
  handleLogout: () => dispatch(handleLogout())
})
export default connect(mapStateToProps, mapDispatchToProps)(header)
