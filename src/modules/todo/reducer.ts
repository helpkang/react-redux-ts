import {TodoAction, Todo} from './types'
import {ActionType, createReducer} from 'typesafe-actions';

import * as todoActions from './actions'

export type TodosAction = ActionType<typeof todoActions>;

const initState : Todo = {
    todos: []
}

export const todo = createReducer<Todo, TodosAction>(initState)
.handleAction(todoActions.addTodo, (state, action)=>{
    return {todos: [...state.todos, action.payload]}
})
.handleAction(todoActions.deleteTodo, (state, action)=>{
    return {todos: []}
})
