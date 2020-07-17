/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireHomePage = () => {
  const homePagePath = '../../pattern/page/HomePage'
  jest.mock(homePagePath, () => 'HomePage')
  return require(homePagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => 'NotFoundPage')
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => {
    return {
      appRootPath: 'fantastic-app-root-path',
      notFoundPagePath: 'fantastic-not-found-page-path',
    }
  })
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => {
    return require('../index')
  }

  describe('appRootRoute', () => {
    const homePage = mockRequireHomePage()

    const expectedAppRootRoute = {
      path: path.appRootPath,
      exact: true,
      clientComponent: homePage.AsyncHomePage,
      serverComponent: homePage.HomePage,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
