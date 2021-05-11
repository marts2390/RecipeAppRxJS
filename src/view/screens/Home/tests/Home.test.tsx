import React from 'react'
import { shallow } from 'enzyme'
import Home from '../index'

test('Home page is rendered', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper).toMatchSnapshot()
})
