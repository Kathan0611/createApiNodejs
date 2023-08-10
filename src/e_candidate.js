import express from 'express';
import {
    insertUser,
    getUser,
    deleteUser,
    // updateUser,
} from './candidate.js';


const router = express.Router();
router.get('/', getUser);
router.post('/', insertUser);
router.delete('/:id', deleteUser);
// router.put('/:id', updateUser);


export default router;