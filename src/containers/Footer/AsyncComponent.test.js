import React from 'react'
import { shallow, mount } from 'enzyme'

import AsyncComponent from './AsyncComponent.js'

describe('AsyncComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AsyncComponent />)
    console.log(component.find('div').length)
    expect(component).toMatchSnapshot()
  })
})
