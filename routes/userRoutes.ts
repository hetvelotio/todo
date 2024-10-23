import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controller/user';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;