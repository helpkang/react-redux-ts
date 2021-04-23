import { createStoreHook } from 'react-redux';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux'

import { todo } from './todo/reducer'

import { Todo } from './todo/types'

export type RootState = {
    todo: Todo;
}


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootRecuder = combineReducers({
    todo,
})


const middlewares: any[] = []; // 나중에 이 자리에 미들웨어 추가

const store = createStore(rootRecuder, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store