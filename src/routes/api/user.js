import express from 'express';
import asyncHandler from 'express-async-handler';
import { userService } from '../../services';

export const usersRouter = express.Router();

// Get all Users
usersRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const users = await userService.getUsers();
        res.send(users);
    })
);

// Get one User
usersRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const user = await userService.getUser(id);
        res.send(user);
    })
);

// Add one User
usersRouter.post(
    '/add',
    asyncHandler(async (req, res) => {
        const user = req.body;
        const users = await userService.addUser(user);
        res.send(users);
    })
);
// Update one User
usersRouter.post(
    '/update',
    asyncHandler(async (req, res) => {
        const user = req.body;
        const updatedCount = await userService.updateUser(user);
        res.send({ result: updatedCount + ' users Updated' });
    })
);
// Delete one user
usersRouter.post(
    '/delete',
    asyncHandler(async (req, res) => {
        const uid = req.body;
        const deletedCount = await userService.deleteUser(uid);
        res.send({ result: deletedCount + ' users deleted' });
    })
);
