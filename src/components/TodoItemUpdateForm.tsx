import { TodoItemStatus } from "../constants/TodoItemStatus";
import { TodoItemModel } from "../models/TodoItemModel";
import { useState } from "react";

export const TodoItemUpdateForm = ({
  model,
  updateItemHandler,
}: {
  model: TodoItemModel;
  updateItemHandler: (item: TodoItemModel) => void;
}): JSX.Element => {
  const _id = model._id;
  const [task, setTask] = useState(model.task);
  const [status, setStatus] = useState(model.status);

  const updateTodoItem = async (event: React.FormEvent) => {
    event.preventDefault();
    updateItemHandler({ _id, task, status });
  };

  return (
    <div className="bg-white">
      <form
        className="flex flex-col w-full border-x-2 border-b-2 border-solid border-black rounded-b p-4 gap-2"
        onSubmit={updateTodoItem}
      >
        <label>Task: </label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          type="text"
          defaultValue={model.task}
          onChange={({ target }) => setTask(target.value)}
        />

        <label>Status: </label>
        {
          <select
            value={status}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setStatus(event.target.value)
            }
          >
            {TodoItemStatus.list.map((item: TodoItemStatus) => {
              return <option value={item.key}>{item.label}</option>;
            })}
          </select>
        }

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit Changes
        </button>
      </form>
    </div>
  );
};
