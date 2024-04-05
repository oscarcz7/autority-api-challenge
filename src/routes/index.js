import { Router } from 'express';

import * as homeController from '@/controllers/home';

const router = Router();

router.get('/', homeController.index);

router.get('/tasks', homeController.tasks);
router.get('/task/:id', homeController.taskById);
router.post('/task', homeController.createTask);
router.put('/task/:id', homeController.updateTaskById);
router.delete('/task/:id', homeController.deleteTaskById);

export default router;
