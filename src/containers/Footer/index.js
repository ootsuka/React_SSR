import React, { Component } from 'react'
import Loadable from 'react-loadable'

import styles from './style.css'
import withStyle from '../../withStyle'

const LoadableComponent = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './AsyncComponent.js'),
  loading() {
    return <div>Loading...</div>
  }
});
class Footer extends Component {
  render() {
    return(
      <div className={styles.container}>
        I am a footer
        <LoadableComponent />
      </div>
    )
  }
}

export default withStyle(Footer, styles)
