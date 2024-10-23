import { Status } from "../models/todo";
import todoRepo from "../repository/todo.repo";

class TodoService {
    public static instance: TodoService;
    private constructor() { }

    public static getInstance() {
        if (!TodoService.instance) {
            TodoService.instance = new TodoService();
        }
        return TodoService.instance;
    }

    public async createTodo(desc: string, status: Status, userId: string) {
        try {
            return await todoRepo.create({ desc, status, userId });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async getTodosByUserId(userId: string) {
        try {
            return await todoRepo.getByUserId(userId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public async updateTodo(id: string, updatedFields: Partial<{ desc: string, status: Status }>) {
        try {
            return await todoRepo.update(id, updatedFields);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public async deleteTodo(id: string) {
        try {
            return await todoRepo.delete(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default TodoService.getInstance();