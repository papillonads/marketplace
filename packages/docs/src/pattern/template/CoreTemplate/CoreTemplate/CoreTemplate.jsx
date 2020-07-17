import React from 'react'
import { defaultProps, propTypes } from './CoreTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CoreTemplate.MainContent'

export function CoreTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

CoreTemplate.defaultProps = defaultProps

CoreTemplate.propTypes = propTypes
