import React, { ChangeEvent, FormEvent, ReactElement, useCallback, useState } from 'react'

import {useDispatch} from 'react-redux'
import { addTodo } from './modules/todo/actions';


export const Todo =  () => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const updateTodo = useCallback(
        (todo: string) => dispatch(addTodo(todo)),
        [dispatch]
    )

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    const onSubmit = (e: FormEvent) =>{
        e.preventDefault()
        updateTodo(value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="TodlList input" value={value} onChange={onChange}/>
            <button type="submit">저장</button>
        </form>
    )

}