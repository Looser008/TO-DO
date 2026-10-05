import express from 'express'
import testCont from '../controllers/authControllers.js';

const router = express.Router();

router.get('/', testCont)
export default router;