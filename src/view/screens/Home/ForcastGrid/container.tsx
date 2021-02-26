import React, { FC } from 'react'
import { useStore } from 'data'

import ForcastGridComponent from './component'

const ForcastGridContainer:FC = () => {
  const { WeatherAppStore: { forcastData } } = useStore()

  return (
    <ForcastGridComponent
      forcastData={ forcastData }
    />
  )
}

export default ForcastGridContainer
