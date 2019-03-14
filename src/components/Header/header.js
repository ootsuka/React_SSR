import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin, handleLogout } from './store/actions'
import styles from './style.css'

export default class header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return(
      <div className={styles.container}>
        <Link to='/' className={styles.item}>home</Link>
        { login ? <Fragment>
        <Link to='/translation' className={styles.item}>translation list</Link>
        <div onClick={handleLogout} className={styles.item}>log out</div>
      </Fragment> : <div onClick={handleLogin} className={styles.item}>login</div>
        }
      </div>
    )
  }
}
