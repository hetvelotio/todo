import { Request, Response } from "express";
import userService from "../service/userService";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const data = await userService.createUser(name);
        res.status(201).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const data = await userService.getAllUsers();
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}



export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await userService.getUserById(id);
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const data = await userService.updateUser(id, name);
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await userService.deleteUser(id);
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}