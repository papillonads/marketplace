import React from 'react'
import { defaultProps, propTypes } from './CorePage.prop'

const LazyCorePage = React.lazy(() => import('./CorePage'))

export function AsyncCorePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyCorePage />
    </React.Suspense>
  )
}

AsyncCorePage.defaultProps = defaultProps

AsyncCorePage.propTypes = propTypes
