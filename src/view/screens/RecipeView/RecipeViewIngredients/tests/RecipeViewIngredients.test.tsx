import React from 'react'
import { shallow } from 'enzyme'
import RecipeViewIngredients from '../component'

let wrapper
let props

beforeEach(() => {
  props = {
    ingredientsList: ['ingredient1', 'ingredient2', 'ingredient3'],
    recipeMethod: 'This is the recipe method',
    isLoaded: false,
  }

  wrapper = shallow(<RecipeViewIngredients { ...props } />)
})

test('Ingredients list is rendered', () => {
  expect(wrapper).toMatchSnapshot()
})

test('isLoading is false', () => {
  const elem = wrapper.find({ 'data-testid': 'ingredientWrapper' })
  expect(elem.prop('in')).toBe(false)
})

test('isLoading is true', () => {
  wrapper.setProps({ isLoaded: true })
  const elem = wrapper.find({ 'data-testid': 'ingredientWrapper' })
  expect(elem.prop('in')).toBe(true)
})
