import React from 'react'
import { shallow } from 'enzyme'

import { Home } from './index.js'

describe('Home', () => {

  it('should render itself and subcomponents', () => {
    const props = {
      list: [{id: 1, title: 'test1'}, {id: 2, title: 'test2'}, {id: 3, title: 'test3'}],
      getList: jest.fn()
    }
    const wrapper = shallow(<Home {...props}/>)
    expect(wrapper.find('title')).toHaveLength(1)
    expect(wrapper.find('meta')).toHaveLength(1)
    expect(wrapper.find('div')).toHaveLength(5)
    expect(wrapper).toMatchSnapshot()

  })
  it('should call props.getList if list length is 0', () => {
    const props = {
      list: [],
      getList: jest.fn()
    }
    const wrapper = shallow(<Home {...props}/>)
    expect(props.getList.mock.calls).toHaveLength(1)
  })
})
