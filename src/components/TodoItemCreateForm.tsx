import { useState } from 'react'
import { TodoItemModel } from '../models/TodoItemModel'

export const TodoItemCreateForm = ({ insertItemHandler } : { insertItemHandler: (item: TodoItemModel) => void }) : JSX.Element => {

    const [isCreateMode, setIsCreateMode] = useState(false);
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");

    const createTodoItem = async (event: React.FormEvent) => {
        event.preventDefault();
        insertItemHandler({ task, status });
    }

    return <>
        <button onClick={() => setIsCreateMode(!isCreateMode)}>{isCreateMode ? "Collapse Create Form" : "Expand Create Form"}</button>
        {
            isCreateMode && (
                <form onSubmit={createTodoItem}>
                    <label htmlFor="task">Task: </label>
                    <input
                        id="task"
                        type="text" 
                        onChange={({ target }) => setTask(target.value)}
                    />

                    <label htmlFor="status">Status: </label>
                    <input 
                        id="status"
                        type="text" 
                        onChange={({ target }) => setStatus(target.value)}
                    />

                    <button type="submit">Submit Changes</button>
                </form>
            )
        }
    </>
}