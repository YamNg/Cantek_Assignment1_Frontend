import { useEffect, useState } from 'react'
import { TodoItemModel } from '../models/TodoItemModel';
import TodoService from '../services/TodoService';
import TodoItem from './TodoItem';
import { TodoItemCreateForm } from './TodoItemCreateForm';

const TodoSection = (): JSX.Element => {
    const [todos, setTodos] = useState<TodoItemModel[]>([]);

    useEffect(() => {
        TodoService
            .getAll()
            .then((todoItems) => {
                setTodos(todoItems);
            })
    }, []);


    const insertItemHandler = async (item: TodoItemModel) : Promise<void> => {
        
        const createdTodoItem = await TodoService.create(item);

        setTodos(todos.concat(createdTodoItem));
    }

    const updateItemHandler = async (item: TodoItemModel) : Promise<void> => {

        const updatedTodoItem = await TodoService.update(item);

        setTodos(
            todos.map(todoItem => {
                return todoItem._id === updatedTodoItem._id ? updatedTodoItem : todoItem
            })
        );
    }

    const deleteItemHandler = async (id: string) : Promise<void> => {

        await TodoService.remove(id);

        setTodos(
            todos.filter(todoItem => todoItem._id !== id)
        );
    }

    return (
        <div className="h-screen flex flex-col px-20">
            <h1 className='text-center'>My Todo List</h1>
            <TodoItemCreateForm insertItemHandler={insertItemHandler}/>
            <ul className='h-[75vh] overflow-y-auto'>
                {
                    todos.map((item) => <TodoItem key={item._id} model={item} updateItemHandler={updateItemHandler} deleteItemHandler={deleteItemHandler}/>)
                }
            </ul>
        </div>
    );
}

export default TodoSection