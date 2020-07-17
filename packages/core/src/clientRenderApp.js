/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { a11y } from '@papillonads/library'
import { appRootRoute, notFoundPageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/ErrorBoundary'
import { clientAppStore } from './store/client'

a11y.checkAccessibilityIssues(React, ReactDOM, 1000)

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Switch>
            <Route exact={appRootRoute.exact} path={appRootRoute.path} component={appRootRoute.clientComponent} />
            <Route component={withRouter(notFoundPageRoute.clientComponent)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
