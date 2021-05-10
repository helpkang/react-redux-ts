import { Epic } from "redux-observable";
import { from } from "rxjs";
import { exhaustMap, filter, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";


import * as API from './todoApi'
import { actions, TodoAction, TodoType } from "./types";



export const weatherGetEpic: Epic<
  TodoAction,
  TodoAction,
  TodoType,
  typeof API
> = (action$, store, { callData }) =>
    action$.pipe(
      filter(isActionOf(actions.addTodo)),
      exhaustMap(action =>
        from(callData(action.payload)).pipe(
          map(actions.addTodoAsync)
        )
      )
    );

export const weatherEpic = [weatherGetEpic];
