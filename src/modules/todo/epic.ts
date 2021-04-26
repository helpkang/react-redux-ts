import { resolve } from "node:dns";
import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { exhaustMap, filter, map, mapTo } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";

import * as actions from "./actions";
import { Todo } from "./types";
export type ActionsType = ActionType<typeof actions>;

type RootState = { todo: Todo }
function callData(todo: string): Promise<string> {
  return new Promise<string>(function (resolve) {
    resolve(todo);
  })
}
export const weatherGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  any
> = (action$) =>
    action$.pipe(
      filter(isActionOf(actions.addTodo)),
      mapTo((action) => action.payload
      //   from(callData(action.payload)).pipe(
      //     map(actions.addTodoAsync)
      //   )
      )
    );

export default [weatherGetEpic];
