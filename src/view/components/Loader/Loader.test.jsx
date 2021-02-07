import React from 'react'
import { render } from '@testing-library/react'
import Loader from './index'

test('Slider is rendered', () => {
  const { container } = render(<Loader />)
  expect(container.firstChild).toHaveClass('spinner')
})
