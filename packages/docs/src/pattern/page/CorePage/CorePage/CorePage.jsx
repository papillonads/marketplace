import React from 'react'
import { CoreTemplate } from '../../../template/CoreTemplate'
import { defaultProps, propTypes } from './CorePage.prop'

export function CorePage() {
  return <CoreTemplate.Core />
}

CorePage.defaultProps = defaultProps

CorePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default CorePage
