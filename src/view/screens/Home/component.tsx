import React, { PureComponent } from 'react'
import { Grid, Button } from '@material-ui/core'
import { IWeatherByCityModel } from 'models/weatherByCityModel'

import { Link } from 'react-router-dom'

import ForcastGrid from 'view/screens/Home/ForcastGrid'
import LocationWidget from 'view/screens/Home/LocationWidget'
import WeatherInfoWidget from 'view/screens/Home/WeatherInfoWidget'
import LoaderComponent from 'view/components/Loader'

import moment from 'moment'

import cn from 'classnames'

import styles from './Main.module.scss'

interface IHomeComponentProps {
  weatherData: IWeatherByCityModel | null;
  isLoaded: boolean | null;
  initialLoad: () => void
}

class HomeComponent extends PureComponent<IHomeComponentProps> {
  componentDidMount() {
    const { initialLoad } = this.props

    initialLoad()
  }

  render() {
    const { weatherData, isLoaded } = this.props
    const data = weatherData && weatherData[0]
    const homeScreenClasses = cn(styles.homeScreen, { [styles.isLoading]: !isLoaded })

    return (
      <div className={ homeScreenClasses }>
        {isLoaded ? (
          <>
            <div className={ styles.title }>
              <h1>Weather App</h1>
              <Link to="/forecast">
                <Button
                  variant="contained"
                  color="primary"
                >Go to Forecasts
                </Button>
              </Link>
            </div>
            <p className={ styles.lastUpdated }>{`Last updated ${data && moment.unix(data.ts).fromNow()}`}</p>
            <Grid
              container
              spacing={ 2 }
            >
              <Grid
                item
                xs={ 12 }
                sm={ 6 }
              >
                <LocationWidget />
              </Grid>
              <Grid
                item
                xs={ 12 }
                sm={ 6 }
              >
                <WeatherInfoWidget />
              </Grid>
            </Grid>
            <ForcastGrid />
          </>
        ) : (
          <LoaderComponent />
        )}
      </div>
    )
  }
}

export default HomeComponent
