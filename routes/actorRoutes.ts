import express from 'express';
import { createActor, getActorWithMovies } from '../controller/actor';

const router = express.Router();

router.post('/actors', createActor);
router.get('/actors/:id', getActorWithMovies);


export default router;