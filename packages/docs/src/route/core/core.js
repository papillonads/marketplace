import { CorePage } from '../../pattern/page/CorePage'
import { corePagePath } from '../path'

export const coreRoute = {
  path: corePagePath.core,
  exact: true,
  clientComponent: CorePage.Core.AsyncCore,
  serverComponent: CorePage.Core.Core,
}
