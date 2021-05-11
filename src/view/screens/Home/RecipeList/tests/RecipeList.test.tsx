import React from 'react'
import { shallow } from 'enzyme'
import RecipeList from '../component'
import mealItemArrayMock from '../../../../../mocks/mealItemArrayMock'

test('should render recipe list', () => {
  const wrapper = shallow(<RecipeList meals={ mealItemArrayMock } />)
  expect(wrapper).toMatchSnapshot()
})
