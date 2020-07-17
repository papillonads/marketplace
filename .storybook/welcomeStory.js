import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('Marketplace Microsites', module).add(`v${version} 🎉`, () => <h1>Welcome to {`Marketplace Microsites v${version}`}</h1>)
