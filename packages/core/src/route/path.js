const rootPath = '/'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
