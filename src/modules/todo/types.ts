import {ActionType} from 'typesafe-actions';

import * as actions from './actions';

export type TodoAction = ActionType<typeof actions>;

export type Todo = {
    todos: Array<string>;
    progress: boolean;
}