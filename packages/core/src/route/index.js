import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath } from './path'

export const appRootRoute = {
  path: appRootPath,
  exact: true,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
