import { Request, Response } from "express";
import todoService from "../service/todoService";

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { desc, status, userId } = req.body;
        const data = await todoService.createTodo(desc, status, userId);
        res.status(201).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getTodosByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const data = await todoService.getTodosByUserId(userId);
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log("id",id)
        const updatedFields = req.body;
        const data = await todoService.updateTodo(id, updatedFields);
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await todoService.deleteTodo(id);
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}