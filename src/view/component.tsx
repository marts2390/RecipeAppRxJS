import React, { PureComponent } from 'react'
import AppRouter from 'view/routers/AppRouter'

import LoaderComponent from 'view/components/Loader'

import styles from './View.module.scss'

interface IAppViewProps {
  initialLoad: () => void
  isLoaded: boolean;
}

class AppComponent extends PureComponent<IAppViewProps> {
  componentDidMount() {
    const { initialLoad } = this.props

    initialLoad()
  }

  render() {
    const { isLoaded } = this.props

    return (
      <div className={ styles.appScreen }>
        {isLoaded ? (
          <AppRouter />
        ) : (
          <div className={ styles.spinnerContainer }>
            <LoaderComponent />
          </div>
        )}
      </div>
    )
  }
}

export default AppComponent
