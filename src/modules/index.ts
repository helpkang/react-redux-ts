import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { ActionType } from "typesafe-actions";

import { todo } from './todo/reducer'



import * as actions from "./todo/actions";
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import * as API from './todo/todoApi'

import {weatherEpic} from './todo/epic'
import { RootState } from './root-stat';


export type ActionsType = ActionType<typeof actions>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}


const epicMiddleware = createEpicMiddleware<
    //   ActionsType,
    //   ActionsType,
    any,
    any,
    RootState
>({
    dependencies: API,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootRecuder = combineReducers({
    todo,
})


const middlewares: any[] = [epicMiddleware]; // 나중에 이 자리에 미들웨어 추가

export const store = createStore(rootRecuder, composeEnhancers(
    applyMiddleware(...middlewares)
));

const epics = combineEpics(...weatherEpic);

epicMiddleware.run(epics);