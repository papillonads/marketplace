import React from 'react'
import cx from 'classnames'
import { container } from './HomeTemplate.scss'
import { defaultProps, propTypes } from './HomeTemplate.props'

export function HomeTemplate({ className }) {
  return <div className={cx(className, container)}>HomeTemplate</div>
}

HomeTemplate.defaultProps = defaultProps

HomeTemplate.propTypes = propTypes
