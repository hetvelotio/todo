import express from 'express';
import { addActorToMovie, createMovie, getMovieWithActors } from '../controller/movie';

const router = express.Router();

router.post('/movies', createMovie);
router.get('/movies/:id', getMovieWithActors);

router.post('/movies/add-actor', addActorToMovie);


export default router;