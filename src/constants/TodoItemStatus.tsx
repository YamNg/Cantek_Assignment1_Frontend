export class TodoItemStatus {
  static readonly CREATED = new TodoItemStatus("0", "Created");
  static readonly INPROGRESS = new TodoItemStatus("1", "In Progress");
  static readonly CANCELLED = new TodoItemStatus("2", "Cancelled");
  static readonly PENDING = new TodoItemStatus("3", "Pending");
  static readonly FINISHED = new TodoItemStatus("4", "Finished");
  static readonly list = [
    this.CREATED,
    this.INPROGRESS,
    this.CANCELLED,
    this.PENDING,
    this.FINISHED,
  ];

  readonly key: string;
  readonly label: string;

  private constructor(_key: string, _label: string) {
    this.key = _key;
    this.label = _label;
  }

  public static getStatusLabel(_key: string): string {
    switch (_key) {
      case this.CREATED.key:
        return this.CREATED.label;
      case this.INPROGRESS.key:
        return this.INPROGRESS.label;
      case this.CANCELLED.key:
        return this.CANCELLED.label;
      case this.PENDING.key:
        return this.PENDING.label;
      case this.FINISHED.key:
        return this.FINISHED.label;
      default:
        throw new Error(`Invalid key: ${_key}`);
    }
  }
}
