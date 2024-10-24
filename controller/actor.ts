import { Request, Response } from "express";
import actorService from "../service/actorService";

export const createActor = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const actor = await actorService.createActor(name);
        res.status(201).json(actor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create actor' });
    }
}

export const getActorWithMovies = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const actor = await actorService.getActorWithMovies(id);
        res.status(200).json(actor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch actor and movies' });
    }
}
