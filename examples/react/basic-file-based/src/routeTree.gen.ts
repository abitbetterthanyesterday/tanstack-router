import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as Layoutlayout2Import } from './routes/_layout/_layout-2'
import { Route as PostsPostIdDeepImport } from './routes/posts_.$postId.deep'
import { Route as Layoutlayout2LayoutBImport } from './routes/_layout/_layout-2/layout-b'
import { Route as Layoutlayout2LayoutAImport } from './routes/_layout/_layout-2/layout-a'

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const Layoutlayout2Route = Layoutlayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)

const PostsPostIdDeepRoute = PostsPostIdDeepImport.update({
  path: '/posts/$postId/deep',
  getParentRoute: () => rootRoute,
} as any)

const Layoutlayout2LayoutBRoute = Layoutlayout2LayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => Layoutlayout2Route,
} as any)

const Layoutlayout2LayoutARoute = Layoutlayout2LayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => Layoutlayout2Route,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_layout-2': {
      preLoaderRoute: typeof Layoutlayout2Import
      parentRoute: typeof LayoutImport
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/_layout/_layout-2/layout-a': {
      preLoaderRoute: typeof Layoutlayout2LayoutAImport
      parentRoute: typeof Layoutlayout2Import
    }
    '/_layout/_layout-2/layout-b': {
      preLoaderRoute: typeof Layoutlayout2LayoutBImport
      parentRoute: typeof Layoutlayout2Import
    }
    '/posts_/$postId/deep': {
      preLoaderRoute: typeof PostsPostIdDeepImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LayoutRoute.addChildren([
    Layoutlayout2Route.addChildren([
      Layoutlayout2LayoutARoute,
      Layoutlayout2LayoutBRoute,
    ]),
  ]),
  PostsRoute.addChildren([PostsPostIdRoute, PostsIndexRoute]),
  PostsPostIdDeepRoute,
])
