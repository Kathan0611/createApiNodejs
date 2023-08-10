import express from 'express';
import {
    insertUser,
    getUser,
    deleteUser,
    // updateUser,
    // getUserByid,
    getData
} from './user.js';


const router = express.Router();
router.get('/', getUser);
// router.get('/:id', getUserByid);
router.post('/', insertUser);
router.delete('/:id', deleteUser);
router.get('/:id', getData);


export default router;