export class TodoItemModel {
    public _id?: string;
    public task: string;
    public status: string;

    constructor(_id: string, task: string, status: string){
        this._id = _id;
        this.task = task;
        this.status = status;
    }
}