import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin, handleLogout } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'

class header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return(
<<<<<<< HEAD
      <div className={styles.container}>
        <Link to='/' className={styles.item}>home</Link>
        { login ? <Fragment>
        <Link to='/translation' className={styles.item}>translation list</Link>
        <div onClick={handleLogout} className={styles.item}>log out</div>
      </Fragment> : <div onClick={handleLogin} className={styles.item}>login</div>
=======
      <div className={styles.test}>
        <Link to='/'>home</Link>
        <br />
        { login ? <Fragment>
        <div onClick={handleLogout}>log out</div>
        <br/>
        <Link to='/translation'>translation list</Link>
      </Fragment> : <div onClick={handleLogin}>login</div>
>>>>>>> 94de39019765a073dbe61268fef0610f46016f9c
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyle(header, styles))
