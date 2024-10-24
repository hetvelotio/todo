import { Request, Response } from "express";
import movieService from "../service/movieService";

export const createMovie = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const movie = await movieService.createMovie(title);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create movie' });
    }
}

export const getMovieWithActors = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const movie = await movieService.getMovieWithActors(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie and actors' });
    }
}

export const addActorToMovie = async (req: Request, res: Response) => {
    try {
        const { movieId, actorId, role } = req.body;
        const movie = await movieService.addActorToMovie(movieId, actorId, role);
        res.status(200).json({ message: 'Actor added to movie successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add actor to movie' });
    }
}