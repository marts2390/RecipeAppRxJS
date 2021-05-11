import React from 'react'
import { shallow } from 'enzyme'
import sliderItemMock from '../../../../mocks/sliderItemMock'
import Slider from '../component'

let wrapper
let props

beforeEach(() => {
  props = {
    sliderItems: sliderItemMock,
    sliderAction: jest.fn()
  }

  wrapper = shallow(<Slider { ...props } />)
})

test('Slider is rendered', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Slider is rendered with no items', () => {
  wrapper.setProps({ sliderItems: [] })
  expect(wrapper).toMatchSnapshot()
})

test('should call sliderAction on click', () => {
  const sliderItem = wrapper.find({ 'data-testid': 'recipe-card-1' })
  wrapper.find({ 'data-testid': 'recipe-card-1' }).simulate('click')
  sliderItem.prop('onClick')
  expect(props.sliderAction).toHaveBeenCalledWith(props.sliderItems[1].strCategory)
})

test('should call sliderAction on keyDown', () => {
  const sliderItem = wrapper.find({ 'data-testid': 'recipe-card-1' })
  sliderItem.prop('onKeyDown')({ key: 'Enter' })
  expect(props.sliderAction).toHaveBeenCalledWith(props.sliderItems[1].strCategory)
})
