/*import React from 'react';
import {Provider} from 'react-redux';
import {mount, shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { stub } from 'sinon';
import { StaticRouter } from 'react-router-dom'
import Header from './index.js';

If you try to unit test one of your components that renders a <Link> or a <Route>,
etc. you’ll get some errors and warnings about context. While you may be tempted
to stub out the router context yourself, we recommend you wrap your unit test in
a <StaticRouter> or a <MemoryRouter>

const mockStore = configureMockStore([thunk]);
const handleLogoutMock = jest.fn()

describe('render header', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      header: {
        login: true
      }
    });
  });
  it('should perform login', () => {
    const context = {}
    const props = {
      handleLogout: handleLogoutMock
    }
    let wrapper = mount(

      <StaticRouter context={context}>
        <Header />
      </StaticRouter>
    )
    wrapper.find(header).find('div').at(1).simulate('click')
    expect(wrapper.find('div').children().length).toEqual(3)
    console.log(wrapper.find(header).find('div').debug())
    expect(props.handleLogout.mock.calls.length).toEqual(1)
  })
  it('should render the container component', () => {
    const context = {}
    const wrapper = mount(
     <Provider store={store}>
       <StaticRouter context={context}>
       <Header />
       </StaticRouter>
     </Provider>
    );
    expect(wrapper.find(Header).length).toEqual(1);
    const container = wrapper.find(Header);
    expect(container.find(header).length).toEqual(1);
    expect(container.find(header).props().login).toEqual(true);
    wrapper.unmount()
  })
})*/
