/**
 * Auth app routes
 */
import express from 'express';
import homeController from '../controllers/admin/home';
import sizeController from '../controllers/admin/size';

import { sessionChecker } from '../middleware';

const router = express.Router();

router.get('/', homeController.index);
router.get('/sizes', sessionChecker, sizeController.index);

export default router