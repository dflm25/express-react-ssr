/**
 * Auth app routes
 */
import express from 'express';
import loginController from '../controllers/admin/login';
import { sessionChecker } from '../middleware';

const router = express.Router();

router.get('/login', loginController.index);
router.post('/login', loginController.login);
router.get('/logout', loginController.login);

export default router