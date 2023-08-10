import express from 'express';
import {
    insertUser,
    getUser,
    deleteUser,
    // updateUser,
    // getData
} from './candidatestatus.js';


const router = express.Router();
router.get('/', getUser);
// router.get('/:id', getData);
router.post('/', insertUser);
router.delete('/:id', deleteUser);
// router.put('/:id', updateUser);


export default router;