import React, { FC } from 'react'
import { Grid, Grow } from '@material-ui/core'
import { IWeatherForcastModel } from 'models/weatherForcastModel'

import moment from 'moment'

import styles from './ForcastGrid.module.scss'

interface IForcastGridComponentProps {
  forcastData: IWeatherForcastModel[] | null;
}

const ForcastGridComponent:FC<IForcastGridComponentProps> = ({ forcastData }) => (
  <Grow
    in
    timeout={ 500 }
  >
    <div className={ styles.forcastGrid }>
      <Grid
        container
        spacing={ 2 }
      >
        {forcastData && forcastData.map((item) => (
          <Grid
            item
            key={ item.ts }
            xs={ 4 }
            sm={ 2 }
          >
            <div className={ styles.forcastItem }>
              <img
                src={ `${process.env.PUBLIC_URL}/icons/${item.weather.icon}.png` }
                alt={ item.weather.description }
              />
              <p>{`${item.temp}°C`}</p>
              <p>{item.weather.description}</p>
              <p>{moment.unix(item.ts).format('dddd')}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  </Grow>
)

export default ForcastGridComponent
