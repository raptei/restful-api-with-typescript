'use strict';

import express from 'express';

import { add, update, getById, getAll, remove } from './users-controller';

export const usersRoutes = express.Router();

projectRoutes.get('/users', getAll);
projectRoutes.post('/users', add);
projectRoutes.get('/users/:userId', getById);
projectRoutes.put('/users/:userId', update);
projectRoutes.delete('/users/:userId', remove);

export default usersRoutes;