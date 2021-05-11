import React from 'react'
import { shallow } from 'enzyme'
import sliderItemMock from '../../../../mocks/mealItemMock'
import RecipeCard from '../component'

let wrapper
let props

beforeEach(() => {
  props = { item: sliderItemMock }
  wrapper = shallow(<RecipeCard { ...props } />)
})

test('should render recipeCard', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Link should have be correct', () => {
  const link = wrapper.find('Link')
  expect(link.prop('to')).toBe(`/recipes/${props.item.idMeal}`)
})
