import { createAction  } from 'typesafe-actions';


const ADD_DOTO = 'todo/ADD_DOTO';
const ADD_DOTO_ASYNC = 'todo/ADD_DOTO_ASYNC';
const DELETE_DOTO = 'todo/DELETE_DOTO';

export const addTodo = createAction (ADD_DOTO)<string>();

export const addTodoComplete = createAction (ADD_DOTO_ASYNC)<string>();

export const deleteTodo = createAction (DELETE_DOTO)();
