import React from 'react'
import { shallow, mount } from 'enzyme'

import Translation from './index.js'

describe('Translation', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Translation />)

    console.log(component)

    expect(component).toMatchSnapshot()
  })
  it('should render news list with given strings', () => {
    const strings = ['string1', 'string2']
    const component = shallow(<Translation list={strings}/>)
    expect(component).toMatchSnapshot()
  })
})
