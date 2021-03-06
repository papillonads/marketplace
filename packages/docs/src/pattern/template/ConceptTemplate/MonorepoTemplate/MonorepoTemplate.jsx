import React from 'react'
import { defaultProps, propTypes } from './MonorepoTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MonorepoTemplate.MainContent'

export function MonorepoTemplate() {
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

MonorepoTemplate.defaultProps = defaultProps

MonorepoTemplate.propTypes = propTypes
