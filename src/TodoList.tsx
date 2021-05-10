import { useCallback} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { deleteTodo } from './modules/todo/actions';
import { TodoType } from './modules/todo/types';


export const TodoList =  () => {
    const todoList = useSelector((state:TodoType)=>state.todo.todos)

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