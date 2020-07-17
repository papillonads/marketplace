import React from 'react'
import { defaultProps, propTypes } from './HomePage.props'

const LazyHomePage = React.lazy(() => import('./HomePage'))

export function AsyncHomePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyHomePage />
    </React.Suspense>
  )
}

AsyncHomePage.defaultProps = defaultProps

AsyncHomePage.propTypes = propTypes
