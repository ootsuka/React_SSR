import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getTranslation } from './store/actions'

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
      <div>
        <div>{this.genList()}</div>
      </div>
    ) : <Redirect to='/' />
  }
}

Translation.loadData = (store) => {
  //load data before server renders
  console.log('here')
  return store.dispatch(getTranslation())
}
const mapStateToProps = state => ({
  list: state.translation.translation,
  login: state.header.login
})
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getTranslation())
})
export default connect(mapStateToProps, mapDispatchToProps)(Translation)
