import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getNewsList } from './store/actions'
import Header from '../../components/Header'

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
      <div>
        <Header />
        <div>{this.genList()}</div>
        <button onClick={() => alert('clicked')}>
          click
        </button>
      </div>

    )
  }
}

home.loadData = (store) => {
  //load data before server renders
  return store.dispatch(getNewsList())
}
const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getNewsList())
})
export default connect(mapStateToProps, mapDispatchToProps)(home)
