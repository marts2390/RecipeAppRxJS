import React from 'react'
import { render } from '@testing-library/react'
import Home from './index'

test('Home page is rendered', () => {
  const { container } = render(<Home />)
  expect(container.firstChild).toHaveClass('homeScreen')
})
