import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const rootReducer = combineReducers({
    router: connectRouter(history),
})

export type RootState = ReturnType<typeof rootReducer>

export const logger = createLogger({
    level: 'info',
    collapsed: true,
    predicate: () => true,
    diff: true,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(routerMiddleware(history)),
})
export type AppDispatch = typeof store.dispatch
