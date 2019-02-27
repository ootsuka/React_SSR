import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getNewsList } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'
import SideBar from '../SideBar/index'

class home extends Component {
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
    return(
      <div className={styles.test}>
        <div>{this.genList()}</div>
        <button onClick={() => this.handleClick()}>
          click
        </button>
        <SideBar />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getNewsList())
})
const exportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(home, styles))

exportHome.loadData = (store) => {
  //load data before server renders
  return store.dispatch(getNewsList())
}

export default exportHome
