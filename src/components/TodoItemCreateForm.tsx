import { useState } from "react";
import { TodoItemModel } from "../models/TodoItemModel";
import { IoSaveOutline } from "react-icons/io5";
import { TodoItemStatus } from "../constants/TodoItemStatus";

export const TodoItemCreateForm = ({
  insertItemHandler,
}: {
  insertItemHandler: (item: TodoItemModel) => void;
}): JSX.Element => {
  const [task, setTask] = useState("");

  const createTodoItem = async (event: React.FormEvent) => {
    event.preventDefault();
    insertItemHandler({ task, status: TodoItemStatus.CREATED.key });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="sticky bottom-0 bg-white p-1">
      <form
        className="grid grid-flow-col grid-cols-10 gap-1"
        onSubmit={createTodoItem}
      >
        <input
          className="col-span-10 h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50"
          id="task"
          type="text"
          onChange={({ target }) => setTask(target.value)}
        />
        <button className="" type="submit">
          <IoSaveOutline size="2rem" />
        </button>
      </form>
    </div>
  );
};
