/**
 * Auth app routes
 */
import express from 'express';
import homeController from '../controllers/web/home';

const router = express.Router();

router.get('/', homeController.index);

export default router