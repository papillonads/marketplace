import React from 'react'
import { HomeTemplate } from '../../template/HomeTemplate'
import { defaultProps, propTypes } from './HomePage.props'

export function HomePage({ className }) {
  return <HomeTemplate className={className} />
}

HomePage.defaultProps = defaultProps

HomePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default HomePage
