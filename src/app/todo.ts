export class Todo {
    id: number;
    title: string;
    isCompleted: boolean;
    created_dt: Date;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.isCompleted = false;
        this.created_dt = new Date();
    }
}
