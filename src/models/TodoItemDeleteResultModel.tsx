export class TodoItemDeleteResultModel {
    public acknowledged: boolean;
    public deletedCount: number;

    constructor(acknowledged: boolean, deletedCount: number){
        this.acknowledged = acknowledged;
        this.deletedCount = deletedCount;
    }
}