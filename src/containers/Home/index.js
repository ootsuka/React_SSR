import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { getNewsList } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'
import Footer from '../Footer/index'


class home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getList()
    }
  }

  genList() {
    return (
      this.props.list.map((item) => <div className={styles.item} key={item.id}>{item.title}</div>)
    )
  }
  render() {
    return(
      <Fragment>
        <Helmet>
          <title>news feed</title>
          <meta name="description" content="this is a news list page" />
        </Helmet>
        <div className={styles.container}>
          <div>{this.genList()}</div>
          <Footer />
        </div>
      </Fragment>
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
