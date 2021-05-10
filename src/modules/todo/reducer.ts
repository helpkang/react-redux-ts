import { createReducer} from 'typesafe-actions';

import {actions as todoActions, Todo, TodoAction} from './types'



const initState : Todo = {
    todos: [],
    progress: false,
}

export const todo = createReducer<Todo, TodoAction>(initState)
.handleAction(todoActions.addTodo, (state, action)=>{
    return {...state, progress: true}
})
.handleAction(todoActions.addTodoAsync, (state, action)=>{
    return {todos: [...state.todos, action.payload], progress: false}
})
.handleAction(todoActions.deleteTodo, (state, action)=>{
    return {todos: [], progress: false}
})
