import React, { ChangeEvent, FormEvent, ReactElement, useCallback, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { RootState } from './modules/root-stat';
import { deleteTodo } from './modules/todo/actions';


export const TodoList =  () => {
    const todoList = useSelector((state:RootState)=>state.todo.todos)

    const dispatch = useDispatch();

    const removeTodo = useCallback(
        () => dispatch(deleteTodo()),
        [dispatch]
    )

    if(todoList.length <1) return <p>등록된게 없습니다.</p>
    return (
        <>
            <span onClick={removeTodo}>(X)</span>
            {
                todoList.map(v=><li><span>{v}</span></li>)
            }
        </>
    )

}