import { TodoItemModel } from "../models/TodoItemModel";
import { useState } from "react";
import { TodoItemUpdateForm } from "./TodoItemUpdateForm";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { TodoItemStatus } from "../constants/TodoItemStatus";
import { IconContext } from "react-icons";
import { IoIosCloseCircleOutline } from "react-icons/io";

type TodoItemProps = {
  model: TodoItemModel;
  updateItemHandler: (item: TodoItemModel) => void;
  deleteItemHandler: (id: string) => void;
};

const TodoItem = ({
  model,
  updateItemHandler,
  deleteItemHandler,
}: TodoItemProps) => {
  const deleteTodoItem = async (event: React.FormEvent, _id: string) => {
    event.preventDefault();
    deleteItemHandler(_id);
  };

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  return (
    <>
      <li>
        <div
          className={`grid grid-flow-col grid-col-12 ${
            isUpdateMode ? "border-2 border-solid border-black rounded-t" : ""
          }`}
        >
          <p className="col-span-11 p-4">
            {model.task} - {TodoItemStatus.getStatusLabel(model.status)}
          </p>
          <div className={`w-full h-full flex gap-3`}>
            <IconContext.Provider value={{ color: "black", size: "1.2rem" }}>
              {!isUpdateMode ? (
                <>
                  <button onClick={() => setIsUpdateMode(!isUpdateMode)}>
                    <FaEdit />
                  </button>
                  <button
                    onClick={(event) => deleteTodoItem(event, model._id ?? "")}
                  >
                    <FaRegTrashCan />
                  </button>
                </>
              ) : (
                <button onClick={() => setIsUpdateMode(!isUpdateMode)}>
                  <IoIosCloseCircleOutline />
                </button>
              )}
            </IconContext.Provider>
          </div>
        </div>
        {isUpdateMode && (
          <TodoItemUpdateForm
            model={model}
            updateItemHandler={updateItemHandler}
          />
        )}
      </li>
    </>
  );
};

export default TodoItem;
