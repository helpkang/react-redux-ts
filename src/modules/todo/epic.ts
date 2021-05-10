import { Epic } from "redux-observable";
import { from } from "rxjs";
import { exhaustMap, filter, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";


import * as API from './service'
import { actions, TodoAction, TodoType } from "./types";



export const weatherGetEpic: Epic<
  TodoAction,
  TodoAction,
  TodoType,
  typeof API
> = (action$, store, { addTodo: callData }) =>
    action$.pipe(
      filter(isActionOf(actions.addTodo)),
      exhaustMap(action =>
        from(callData(action.payload)).pipe(
          map(actions.addTodoComplete)
        )
      )
    );

export const weatherEpic = [weatherGetEpic];
