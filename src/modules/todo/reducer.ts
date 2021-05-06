import {Todo} from './types'
import {ActionType, createReducer} from 'typesafe-actions';

import * as todoActions from './actions'

export type TodosAction = ActionType<typeof todoActions>;

const initState : Todo = {
    todos: [],
    progress: false,
}

export const todo = createReducer<Todo, TodosAction>(initState)
.handleAction(todoActions.addTodo, (state, action)=>{
    return {...state, progress: true}
})
.handleAction(todoActions.addTodoAsync, (state, action)=>{
    return {todos: [...state.todos, action.payload], progress: false}
})
.handleAction(todoActions.deleteTodo, (state, action)=>{
    return {todos: [], progress: false}
})
