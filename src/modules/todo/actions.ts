import {createAction  } from 'typesafe-actions';

// const {createStandardAction} = deprecated;

const ADD_DOTO = 'todo/ADD_DOTO';
const DELETE_DOTO = 'todo/DELETE_DOTO';

export const addTodo = createAction (ADD_DOTO)<string>();

export const deleteTodo = createAction (DELETE_DOTO)();
