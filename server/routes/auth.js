/**
 * Auth app routes
 */
import express from 'express';
import loginController from '../controllers/admin/login';
import { sessionChecker } from '../middleware';

const router = express.Router();

router.get('/login', sessionChecker, loginController.index);
router.post('/login', sessionChecker, loginController.login);
router.get('/logout', sessionChecker, loginController.login);

export default router