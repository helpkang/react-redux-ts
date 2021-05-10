import { Epic } from "redux-observable";
import { from } from "rxjs";
import { exhaustMap, filter, map } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";

import * as actions from "./actions";

import * as API from './todoApi'
import { TodoType } from "./types";

export type TodoActionsType = ActionType<typeof actions>;


export const weatherGetEpic: Epic<
  TodoActionsType,
  TodoActionsType,
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

// eslint-disable-next-line import/no-anonymous-default-export
export default [weatherGetEpic];
