import React from 'react'
import { shallow } from 'enzyme'

import Home from './index.js'

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />)

    expect(component).toMatchSnapshot()
  })
  it('should render news list with given strings', () => {
    const strings = ['string1', 'string2']
    const component = shallow(<Home list={strings}/>)
    expect(component).toMatchSnapshot()
  })
})