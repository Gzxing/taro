declare module '@tarojs/router/types/router' {
  import { AppConfig, PageConfig } from '@tarojs/taro'
  import { IH5RouterConfig } from '@tarojs/taro/types/compile'

  interface Route extends PageConfig {
    path?: string
    load?: () => Promise<any>
  }

  interface Router {
    mode: IH5RouterConfig['mode']
    basename: string
    customRoutes?: Record<string, string | string[]>
    pathname: string
    forcePath?: string
  }

  interface SpaRouterConfig extends AppConfig {
    routes: Route[]
    router: Router
    // 下拉刷新组件
    PullDownRefresh?: any
  }

  interface MpaRouterConfig extends AppConfig {
    route: Route,
    pageName: string
    router: Router
    // 下拉刷新组件
    PullDownRefresh?: any
  }
}
