import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
      this.props.list.map((item) => <div key={item.id}>{item.title}</div>)
    )

  }
  render() {
    return this.props.login ? (
      <div className={styles.test}>
        <div>{this.genList()}</div>
      </div>
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
