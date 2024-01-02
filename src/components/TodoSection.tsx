import { useEffect, useState } from "react";
import { TodoItemModel } from "../models/TodoItemModel";
import TodoService from "../services/TodoService";
import TodoItem from "./TodoItem";
import { TodoItemCreateForm } from "./TodoItemCreateForm";

const TodoSection = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoItemModel[]>([]);

  useEffect(() => {
    TodoService.getAll().then((todoItems) => {
      setTodos(todoItems);
    });
  }, []);

  const insertItemHandler = async (item: TodoItemModel): Promise<void> => {
    const createdTodoItem = await TodoService.create(item);

    setTodos(todos.concat(createdTodoItem));
  };

  const updateItemHandler = async (item: TodoItemModel): Promise<void> => {
    const updatedTodoItem = await TodoService.update(item);

    setTodos(
      todos.map((todoItem) => {
        return todoItem._id === updatedTodoItem._id
          ? updatedTodoItem
          : todoItem;
      })
    );
  };

  const deleteItemHandler = async (id: string): Promise<void> => {
    await TodoService.remove(id);

    setTodos(todos.filter((todoItem) => todoItem._id !== id));
  };

  return (
    <div className="py-4">
      <div className="flex flex-col mx-auto w-[85%] max-w-4xl pb-1 rounded-lg border-2 border-solid border-black">
        <h1 className="sticky top-0 text-center bg-black text-white p-1">
          My Todo List
        </h1>
        <div className="p-1 h-[80vh] overflow-y-scroll">
          <ul className="p-3 flex flex-col gap-4">
            {todos.map((item) => (
              <TodoItem
                key={item._id}
                model={item}
                updateItemHandler={updateItemHandler}
                deleteItemHandler={deleteItemHandler}
              />
            ))}
          </ul>
        </div>
        <TodoItemCreateForm insertItemHandler={insertItemHandler} />
      </div>
    </div>
  );
};

export default TodoSection;
