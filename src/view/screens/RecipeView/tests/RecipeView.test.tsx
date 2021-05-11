import React from 'react'
import { shallow } from 'enzyme'
import RecipeView from '../component'

let wrapper
let props

beforeEach(() => {
  props = {
    getRecipeData: jest.fn(),
    resetState: jest.fn(),
    recipeId: '',
    isLoaded: false,
  }

  wrapper = shallow(<RecipeView { ...props } />)
})

test('Recipe View is rendered with data', () => {
  wrapper.setProps({ isLoaded: true })
  expect(wrapper).toMatchSnapshot()
})

test('Should display loader', () => {
  expect(wrapper).toMatchSnapshot()
})

test('get initial load', () => {
  const instance = wrapper.instance()
  jest.spyOn(instance, 'getData')
  instance.componentDidMount()
  expect(instance.getData).toHaveBeenCalledTimes(1)
})
