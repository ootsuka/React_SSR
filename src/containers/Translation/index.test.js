import React from 'react'
import { shallow } from 'enzyme'

import { Translation } from './index.js'

describe('Translation', () => {

  it('should render itself and subcomponents when login is true', () => {
    const props = {
      login: true,
      list: [{id: 1, title: 'test1'}, {id: 2, title: 'test2'}, {id: 3, title: 'test3'}],
      getList: jest.fn()
    }
    const wrapper = shallow(<Translation {...props}/>)
    expect(wrapper.find('title')).toHaveLength(1)
    expect(wrapper.find('meta')).toHaveLength(1)
    expect(wrapper.find('div')).toHaveLength(5)
    expect(wrapper).toMatchSnapshot()

  })
  it('should call props.getList if list length is 0', () => {
    const props = {
      login: true,
      list: [],
      getList: jest.fn()
    }
    const wrapper = shallow(<Translation {...props}/>)
    expect(props.getList.mock.calls).toHaveLength(1)
  })

  it('should render itself and subcomponents when login is true', () => {
    const props = {
      login: false,
      list: [],
      getList: jest.fn()
    }
    const wrapper = shallow(<Translation {...props}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
