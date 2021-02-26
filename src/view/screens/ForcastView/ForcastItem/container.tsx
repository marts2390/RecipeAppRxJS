import React, { FC } from 'react'

import { IWeatherForcastModel } from 'models/weatherForcastModel'

import ForcastItemComponent from './component'

interface ForcastItemContainerProps {
  item: IWeatherForcastModel;
}

const ForcastItemContainer:FC<ForcastItemContainerProps> = ({ item }) => (
  <ForcastItemComponent
    item={ item }
  />
)

export default ForcastItemContainer
