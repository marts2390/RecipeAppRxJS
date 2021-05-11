import React from 'react'
import { shallow } from 'enzyme'
import View from '../component'

let wrapper
let props

beforeEach(() => {
  props = {
    initialLoad: jest.fn(),
    isLoaded: false,
  }
  wrapper = shallow(<View { ...props } />)
})

test('should render loader', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render router', () => {
  wrapper.setProps({ isLoaded: true })
  expect(wrapper).toMatchSnapshot()
})

test('get initial load call', () => {
  const instance = wrapper.instance()
  instance.componentDidMount()
  expect(props.initialLoad).toHaveBeenCalled()
})

