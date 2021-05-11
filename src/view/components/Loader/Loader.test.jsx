import React from 'react'
import { shallow } from 'enzyme'
import Loader from './index'

test('Slider is rendered', () => {
  const wrapper = shallow(<Loader />)
  expect(wrapper).toMatchSnapshot()
})
