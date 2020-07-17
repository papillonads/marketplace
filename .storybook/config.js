import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'
import logo from './logo.jpg'
import { BrowserRouter } from 'react-router-dom'

const setup = () => {
  addDecorator(withInfo)
  addDecorator(withNotes)
  addParameters({
    options: {
      theme: create({
        base: 'light',
        brandTitle: `Marketplace Microsites v${version}`,
        brandUrl: 'https://github.com/papillonads/marketplace',
        brandImage: logo,
      }),
      isFullscreen: false,
      showNav: true,
      showPanel: false,
      sidebarAnimations: false,
    },
  })

  addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)

  const contexts = [require.context('../packages/core/src', true, /story*\.js$/)]

  const loadStories = () => {
    require('./welcomeStory')
    contexts.forEach((context) => {
      context
        .keys()
        .filter((key) => !key.includes('node_modules'))
        .forEach(context)
    })
  }

  configure(loadStories, module)
}

setup()
