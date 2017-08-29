// @flow
import type { History, Location as HistoryLocation } from 'history'
import type { ITreeNode } from '../util/tree'
import type { TransitionFn } from '../transition/types'
import type { MatchFn } from './matchers'
import Navigation from './Navigation'

export type { MatchFn }

export type Query = { [key: string]: string }
export type Params = { [key: string]: string }

export type Location = $Shape<
  HistoryLocation & {
    params: Params,
    query: Query
  }
>

export type Href = Location | string

export type Config = {
  path: string,
  data?: Object,
  key?: string,
  children?: Config[],
  loadChildren?: LoadChildrenConfigFn,
  match?: 'full' | 'partial',
  canActivate?: GuardFn,
  canDeactivate?: GuardFn,
  onError?: ErrorHandler,
  onTransition?: TransitionFn,
  onEnter?: LifecycleFn,
  onLeave?: LifecycleFn
}

export type LoadChildrenConfigFn = () => Promise<Config[]>

export type GuardFn = (node: RouteNode<*>, nav: Navigation) => boolean | Promise<void>

export type LifecycleFn = (node: RouteNode<*>) => Promise<void>

export type ErrorHandler = (node: RouteNode<*>) => Promise<void>

export type LoadChildrenRouteNode = () => Promise<RouteNode<*>[]>

export type RouteValue<C> = {
  key: string,
  // Original path provided to this route node.
  path: string,
  // Matched path parameters.
  params: Params,
  // Extra data that can be used to provide view specific functionality.
  // e.g. Route component, loading component, etc.
  data: Object,
  matcher: MatchFn,
  loadChildren?: null | LoadChildrenRouteNode,
  canActivate: GuardFn,
  canDeactivate: GuardFn,
  onError: null | ErrorHandler,
  onTransition: null | TransitionFn,
  onEnter: LifecycleFn,
  onLeave: LifecycleFn,
  getContext: () => C
}

export type RouteNode<C> = ITreeNode<RouteValue<C>>

export type MatchResult = {
  node: RouteNode<*>,
  remaining: string,
  params: Params
}