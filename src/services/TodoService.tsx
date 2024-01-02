import axios from 'axios'
import { TodoItemModel } from '../models/TodoItemModel'
import { TodoItemDeleteResultModel } from '../models/TodoItemDeleteResultModel'
const baseUrl = 'http://localhost:3000/todos'

const getAll = async () : Promise<TodoItemModel[]> => {
    const response = await axios.get(baseUrl)
    return response.data;
}

const create = async (model : TodoItemModel) : Promise<TodoItemModel> => {
    const response = await axios.post(baseUrl, model)
    return response.data
}

const update = async (model : TodoItemModel) : Promise<TodoItemModel> => {
    const {_id, ...others} = model;
    const response = await axios.put(`${baseUrl}/${_id}`, others)
    return response.data
}

const remove = async (id: string) : Promise<TodoItemDeleteResultModel> => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data
}

export default { getAll, create, update, remove}
