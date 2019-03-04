import React, { Component } from 'react'
import Loadable from 'react-loadable'

const LoadableMath = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './Math.js'),
  loading() {
    return <div>Loading...</div>
  }
});
class SideBar extends Component {
  render() {
    return(

      <div>
        <LoadableMath />
        A SideBar
      </div>
    )
  }
}


export default SideBar
