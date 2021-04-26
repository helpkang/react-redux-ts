import { Epic } from "redux-observable";
import { from} from "rxjs";
import { exhaustMap, filter, map } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";

import * as actions from "./actions";
import { Todo } from "./types";

import * as API from './service'

export type ActionsType = ActionType<typeof actions>;

type RootState = { todo: Todo }



export const weatherGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API 
> = (action$, store, {callData}) =>
    action$.pipe(
      filter(isActionOf(actions.addTodo)),
      exhaustMap((action) =>
        from(from(callData(action.payload)).pipe(
          map(actions.addTodoAsync)
        ))
      )
    );

export default [weatherGetEpic];
