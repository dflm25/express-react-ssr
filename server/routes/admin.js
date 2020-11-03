/**
 * Auth app routes
 */
import express from 'express';
import homeController from '../controllers/admin/home';
import loginController from '../controllers/admin/login';

import { sessionChecker } from '../middleware';

const router = express.Router();

router.get('/', sessionChecker, homeController.index);
router.get('/login', sessionChecker, loginController.index);
router.post('/login', sessionChecker, loginController.login);

export default router