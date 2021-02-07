import React from 'react'
import { render } from '@testing-library/react'
import Slider from './index'

test('Slider is rendered', () => {
  const { container } = render(<Slider />)
  expect(container.firstChild).toHaveClass('carousel')
})
