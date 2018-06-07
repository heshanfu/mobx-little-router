// @flow
import React, { createContext } from 'react'
import type { Router } from 'mobx-little-router'

export type RouterContextValue = null | Router

const RouterContext = React.createContext((null: RouterContextValue))

export default RouterContext