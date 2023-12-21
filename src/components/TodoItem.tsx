import { TodoItemModel } from "../models/TodoItemModel";
import { useState } from 'react'
import { TodoItemUpdateForm } from "./TodoItemUpdateForm";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoItem = ({ model, updateItemHandler, deleteItemHandler }: { model: TodoItemModel, updateItemHandler: (item: TodoItemModel) => void, deleteItemHandler: (id: string) => void}): JSX.Element => {
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const deleteTodoItem = async (event: React.FormEvent, _id: string) => {
        event.preventDefault();
        deleteItemHandler(_id);
    }

    return (
        <li className="flex gap-2">
            {model.task} - {model.status}
            <button onClick={() => setIsUpdateMode(!isUpdateMode)}>
                {
                    isUpdateMode ? <IoIosCloseCircleOutline /> : <FaEdit />
                }
            </button>
            <button onClick={(event) => deleteTodoItem(event, model._id ?? "")}><FaRegTrashCan /></button>
            {
                isUpdateMode && <TodoItemUpdateForm model={model} updateItemHandler={updateItemHandler}/>
            }
        </li>
    )
}

export default TodoItem;