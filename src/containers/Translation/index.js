import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { getTranslation } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'

class Translation extends Component {

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getList()
    }
  }
  genList() {
    return (
<<<<<<< HEAD
      this.props.list.map((item) => <div calssName={styles.item} key={item.id}>{item.title}</div>)
=======
      this.props.list.map((item) => <div key={item.id}>{item.title}</div>)
>>>>>>> 94de39019765a073dbe61268fef0610f46016f9c
    )

  }
  render() {
    return this.props.login ? (
      <Fragment>
        <Helmet>
          <title>translation list</title>
          <meta name="description" content="this is a translation list page" />
        </Helmet>
<<<<<<< HEAD
        <div className={styles.container}>
=======
        <div className={styles.test}>
>>>>>>> 94de39019765a073dbe61268fef0610f46016f9c
          <div>{this.genList()}</div>
        </div>
      </Fragment>
    ) : <Redirect to='/' />
  }
}

const mapStateToProps = state => ({
  list: state.translation.translation,
  login: state.header.login
})
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getTranslation())
})
const exportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation, styles))

exportTranslation.loadData = (store) => {
  //load data before server renders
  return store.dispatch(getTranslation())
}

export default exportTranslation
