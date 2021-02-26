import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IWeatherByCityModel } from 'models/weatherByCityModel'
import { Grow } from '@material-ui/core'

import {
  faSun, faWind, faCloudRain, faSnowflake, faEye,
} from '@fortawesome/free-solid-svg-icons'

import styles from './WeatherInfoWidget.module.scss'

interface IHomeComponentProps {
  weatherData: IWeatherByCityModel | null;
}

const HomeComponent:FC<IHomeComponentProps> = ({ weatherData }) => {
  const data = weatherData && weatherData[0]

  return (
    <Grow
      in
      timeout={ 500 }
    >
      <div className={ styles.widgetContainer }>
        <div className={ styles.infoContainer }>
          <FontAwesomeIcon
            icon={ faWind }
            className={ styles.wind }
          />
          <div>
            <p>{`Wind speed: ${data && data.wind_spd}m/s`}</p>
            <p>{`Wind direction: ${data && data.wind_cdir}`}</p>
          </div>
        </div>
        <div className={ styles.infoContainer }>
          <FontAwesomeIcon
            icon={ faCloudRain }
            className={ styles.rain }
          />
          <p>{`Chance of rain: ${data && data.precip}`}</p>
        </div>
        <div className={ styles.infoContainer }>
          <FontAwesomeIcon
            icon={ faSnowflake }
            className={ styles.snow }
          />
          <p>{`Chance of snow: ${data && data.snow}`}</p>
        </div>
        <div className={ styles.infoContainer }>
          <FontAwesomeIcon
            icon={ faSun }
            className={ styles.sun }
          />
          <p>{`UV index: ${data && data.uv}`}</p>
        </div>
        <div className={ styles.infoContainer }>
          <FontAwesomeIcon
            icon={ faEye }
            className={ styles.eye }
          />
          <p>{`Visibility: ${data && data.vis}`}</p>
        </div>
      </div>
    </Grow>
  )
}

export default HomeComponent
