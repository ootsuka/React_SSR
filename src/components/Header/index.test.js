import React from 'react'
import { shallow, mount } from 'enzyme'
import { StaticRouter } from 'react-router'
import { Header } from './index.js'

describe('Header', () => {

  it('should render itself and subcomponents and handle Logout when click', () => {
    const props = {
      login: true,
      handleLogin: jest.fn(),
      handleLogout: jest.fn()
    }
    const context = {}
    const wrapper = mount(<StaticRouter context={context}><Header {...props}/></StaticRouter>)
    expect(wrapper.find('div')).toHaveLength(2)
    expect(wrapper).toMatchSnapshot()
    const divElement = wrapper.find('div').get(1)
    divElement.props.onClick()
    expect(props.handleLogout.mock.calls).toHaveLength(1)
  })
  it('should render itself and subcomponents and handle login when click', () => {
    const props = {
      login: false,
      handleLogin: jest.fn(),
      handleLogout: jest.fn()
    }
    const context = {}
    const wrapper = mount(<StaticRouter context={context}><Header {...props}/></StaticRouter>)
    expect(wrapper.find('div')).toHaveLength(2)
    expect(wrapper).toMatchSnapshot()
    const divElement = wrapper.find('div').get(1)
    divElement.props.onClick()
    expect(props.handleLogin.mock.calls).toHaveLength(1)
  })
})
