/**
 * Auth app routes
 */
import express from 'express';
import homeController from '../controllers/admin/home';
import loginController from '../controllers/admin/login';
import sizeController from '../controllers/admin/size';

import { sessionChecker } from '../middleware';

const router = express.Router();

router.get('/', homeController.index);
router.get('/sizes', sessionChecker, sizeController.index);
router.get('/login', sessionChecker, loginController.index);
router.post('/login', sessionChecker, loginController.login);

export default router