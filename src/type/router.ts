// type temRouterTo = { path: string } | { name: string }

// export type routerToConfig<T> = temRouterTo & {
//   query: T
//   isPust?: boolean
// }
export type routerToConfig<T> = {
  name?: string
  path?: string
  query?: T
  isPush?: boolean
}
