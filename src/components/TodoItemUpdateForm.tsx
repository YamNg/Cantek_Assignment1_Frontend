import { TodoItemModel } from "../models/TodoItemModel"
import { useState } from 'react'

export const TodoItemUpdateForm = ({ model, updateItemHandler }: { model: TodoItemModel, updateItemHandler: (item: TodoItemModel) => void }) : JSX.Element => {

    const _id = model._id;
    const [task, setTask] = useState(model.task);
    const [status, setStatus] = useState(model.status);

    const updateTodoItem = async (event: React.FormEvent) => {
        event.preventDefault();
        updateItemHandler({_id, task, status});
    }


    return <form onSubmit={updateTodoItem}>

        <label htmlFor="task">Task: </label>
        <input
            id="task"
            type="text" 
            defaultValue={model.task}
            onChange={({ target }) => setTask(target.value)}
        />

        <label htmlFor="status">Status: </label>
        <input 
            id="status"
            type="text" 
            defaultValue={model.status}
            onChange={({ target }) => setStatus(target.value)}
        />

        <button type="submit">Submit Changes</button>
    </form>
}