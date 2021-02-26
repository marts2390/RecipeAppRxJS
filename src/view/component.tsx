import React from 'react'
import AppRouter from 'view/routers/AppRouter'

import styles from './View.module.scss'

const AppComponent = () => (
  <div className={ styles.appScreen }>
    <AppRouter />
  </div>
)

export default AppComponent
