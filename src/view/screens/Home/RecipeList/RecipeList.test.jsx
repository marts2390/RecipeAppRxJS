import React from 'react'
import { render } from '@testing-library/react'
import RecipeList from './index'

test('Recipe List is rendered', () => {
  const { container } = render(<RecipeList />)
  expect(container.firstChild).toHaveClass('recipeList')
})
