import React from 'react'
import { shallow } from 'enzyme'

import Home from './index.js'

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home />)

    expect(component).toMatchSnapshot()
  })
})
