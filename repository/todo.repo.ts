import db from "../models";
import { Status } from "../models/todo";

class Todo {
    public static instance: Todo;
    private constructor() { }

    public static getInstance() {
        if (!Todo.instance) {
            Todo.instance = new Todo();
        }
        return Todo.instance;
    }

    public async create(data: { desc: string, status: Status, userId: string }) {
        try {
            return await db.Todo.create(data);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getByUserId(userId: string) {
        try {
            return await db.Todo.findAll({ where: { userId } });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async update(id: string, updatedFields: Partial<{ desc: string, status: Status }>) {
        try {
            return await db.Todo.update(updatedFields, { where: {id} });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(id: string) {
        try {
            return await db.Todo.destroy({ where: {id} });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }


}

export default Todo.getInstance();