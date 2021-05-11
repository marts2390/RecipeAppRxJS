import React from 'react'
import { shallow } from 'enzyme'
import RecipeViewHeader from '../component'

let wrapper

beforeEach(() => {
  wrapper = shallow(<RecipeViewHeader isLoaded={ false } />)
})

test('Recipe header is rendered', () => {
  expect(wrapper).toMatchSnapshot()
})

test('isLoading is false', () => {
  const fadeElem = wrapper.find({ 'data-testid': 'fadeElem' })
  expect(fadeElem.prop('in')).toBe(false)
})

test('isLoading is true', () => {
  wrapper.setProps({ isLoaded: true })
  const fadeElem = wrapper.find({ 'data-testid': 'fadeElem' })
  expect(fadeElem.prop('in')).toBe(true)
})
