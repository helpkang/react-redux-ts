import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <TodoAdd></TodoAdd>
            <TodoList></TodoList>
        </>
    )
}