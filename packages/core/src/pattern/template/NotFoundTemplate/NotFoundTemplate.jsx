import React from 'react'
import { Link } from 'react-router-dom'
import { appRootPath } from '../../../route/path'
import { NoMatch } from '../../atom/NoMatch'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'

export function NotFoundTemplate({ location }) {
  return (
    <div>
      <NoMatch location={location} />
      Back to <Link to={appRootPath}>App Root</Link>
    </div>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
