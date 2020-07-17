import { environment } from '@papillonads/library'

export const appState = {
  context: {
    isRunningOnLocalHost: environment.host.isRunningOnLocalHost,
  },
  api: {
    authentication: null,
  },
  ui: {},
}
