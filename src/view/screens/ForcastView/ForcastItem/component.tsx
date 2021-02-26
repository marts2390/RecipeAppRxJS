import React, { FC } from 'react'
import { IWeatherForcastModel } from 'models/weatherForcastModel'
import { Grow } from '@material-ui/core'
import moment from 'moment'

import styles from './ForcastItem.module.scss'

interface ForcastViewComponentProps {
  item: IWeatherForcastModel;
}

const ForcastItemComponent:FC<ForcastViewComponentProps> = ({ item }) => (
  <Grow
    in
    timeout={ 500 }
  >
    <div className={ styles.forcastItem }>
      <h2>{moment.unix(item.ts).format('dddd do MMM')}</h2>
      <div className={ styles.itemImage }>
        <img
          src={ `${process.env.PUBLIC_URL}/icons/${item.weather.icon}.png` }
          alt="current weather"
        />
        <div>
          <p>{`${item.temp}°C`}</p>
        </div>
      </div>
      <h4>{item.weather.description}</h4>
    </div>
  </Grow>
)

export default ForcastItemComponent
