import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IWeatherByCityModel } from 'models/weatherByCityModel'
import { Grow } from '@material-ui/core'

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import styles from './LocationWidget.module.scss'

interface IHomeComponentProps {
  weatherData: IWeatherByCityModel | null;
}

const HomeComponent:FC<IHomeComponentProps> = ({ weatherData }) => {
  const weatherInfo = weatherData && weatherData[0].weather
  const data = weatherData && weatherData[0]


  return (
    <Grow
      in
      timeout={ 500 }
    >
      <div className={ styles.widgetContainer }>
        <h4>{`Current weather for ${data && data.city_name}:`}</h4>
        <h2 className={ styles.weatherText }>{ weatherInfo && weatherInfo.description }</h2>
        <div className={ styles.weatherInfo }>
          <img
            src={ `${process.env.PUBLIC_URL}/icons/${weatherInfo && weatherInfo.icon}.png` }
            alt="current weather"
          />
          <div>
            <h2>{`${data && data.temp}°C`}</h2>
            <p>{`Feels like ${data && data.app_temp}°C`}</p>
          </div>
        </div>
        <div className={ styles.sunInfo }>
          <div className={ styles.sunriseItem }>
            <FontAwesomeIcon
              className={ styles.sun }
              icon={ faSun }
            />
            <p>{data && data.sunrise}</p>
          </div>
          <div className={ styles.sunriseItem }>
            <FontAwesomeIcon
              className={ styles.moon }
              icon={ faMoon }
            />
            <p>{data && data.sunset}</p>
          </div>
        </div>
      </div>
    </Grow>
  )
}

export default HomeComponent
