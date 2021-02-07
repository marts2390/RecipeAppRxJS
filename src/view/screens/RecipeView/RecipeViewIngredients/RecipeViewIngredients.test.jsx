import React from 'react'
import { render } from '@testing-library/react'
import RecipeViewIngredients from './index'

test('ingredients list is rendered', () => {
  const { container } = render(<RecipeViewIngredients />)
  expect(container.firstChild).toHaveClass('ingredientsContainer')
})
