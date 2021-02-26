import React, { PureComponent, ChangeEvent, createRef } from 'react'
import { IWeatherForcastModel } from 'models/weatherForcastModel'
import { Grid, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import LoaderComponent from 'view/components/Loader'

import cn from 'classnames'

import ForcastItem from './ForcastItem'

import styles from './ForcastView.module.scss'

interface ForcastViewComponentProps {
  forcastData: IWeatherForcastModel[];
  isLoaded: boolean | null;
  filteredList: IWeatherForcastModel[];
  resetFilters: () => void;
  getForcastData: (days: number) => void;
  filterMinForecast: (amount: number) => void;
  filterMaxForecast: (amount: number) => void;
}

interface ForecastViewComponentState {
  minTemp: string;
  maxTemp: string;
}

class ForcastViewComponent extends PureComponent<ForcastViewComponentProps, ForecastViewComponentState> {
  constructor(props: ForcastViewComponentProps) {
    super(props)
    this.state = {
      minTemp: '',
      maxTemp: '',
    }
  }

  componentDidMount() {
    const { getForcastData } = this.props

    getForcastData(16)
  }

  handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { filterMinForecast } = this.props
    const converToNumber = Number(e.target.value)

    if (converToNumber) filterMinForecast(converToNumber)
    this.setState({ minTemp: e.target.value })
  }

  handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { filterMaxForecast } = this.props

    const converToNumber = Number(e.target.value)

    if (converToNumber) filterMaxForecast(converToNumber)
    this.setState({ maxTemp: e.target.value })
  }

  handleReset = () => {
    const { resetFilters } = this.props
    this.setState({ minTemp: '', maxTemp: '' })
    resetFilters()
  }


  render() {
    const { isLoaded, filteredList } = this.props
    const { minTemp, maxTemp } = this.state
    const forecastScreenClasses = cn(styles.forecastScreen, { [styles.isLoading]: !isLoaded })

    return (
      <div className={ forecastScreenClasses }>
        {isLoaded ? (
          <>
            <div className={ styles.title }>
              <h1>16 Day Forecast</h1>
              <Link to="/">
                <Button
                  variant="contained"
                  color="primary"
                >
                  Take me back
                </Button>
              </Link>
            </div>
            <div className={ styles.filters }>
              <div>
                <TextField
                  className={ styles.input }
                  onChange={ this.handleMinInputChange }
                  variant="outlined"
                  label="Min Temp"
                  type="number"
                  value={ minTemp }
                />
                <TextField
                  onChange={ this.handleMaxInputChange }
                  variant="outlined"
                  label="Max Temp"
                  type="number"
                  value={ maxTemp }
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={ this.handleReset }
                className={ styles.button }
              >
                Reset
              </Button>
            </div>
            <div>
              <Grid
                container
                spacing={ 2 }
              >
                {filteredList && filteredList.map((item) => (
                  <Grid
                    key={ item.ts }
                    item
                    xs={ 12 }
                    sm={ 4 }
                  >
                    <ForcastItem item={ item } />
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        ) : (
          <LoaderComponent />
        )}
      </div>
    )
  }
}

export default ForcastViewComponent
