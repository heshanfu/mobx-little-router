// @flow
const devTools = process.env.NODE_ENV !== 'production'
  ? (
    require('./validateConfigMiddleware').default.concat(
      require('./timerMiddleware').default(() => Date.now())
    )
  )
  : require('../Middleware').default.EMPTY

export default devTools