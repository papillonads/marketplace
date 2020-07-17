import { AsyncHomePage, HomePage } from '../pattern/page/HomePage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath } from './path'

export const appRootRoute = {
  path: appRootPath,
  exact: true,
  clientComponent: AsyncHomePage,
  serverComponent: HomePage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
