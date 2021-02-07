import React, { FC } from 'react'
import UC from 'actions'

import { ICategoriesDataModel } from 'models/categoriesDataModel'

import SliderComponent from './component'

interface SliderContainerProps {
  sliderItems:ICategoriesDataModel[]
  sliderAction: (category: string) => void;
}

const SliderContainer:FC<SliderContainerProps> = ({ sliderItems, sliderAction }) => (
  <SliderComponent
    sliderItems={ sliderItems }
    sliderAction={ sliderAction }
  />
)

export default SliderContainer
