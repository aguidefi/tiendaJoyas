import express from 'express';
import { controllers } from '../controllers/controller.js';


const router = express.Router();

router.get('/', controllers.home);

router.get('/joyas', controllers.getJoyasHATEOAS);

router.get('/joyas/filtros/', controllers.getJoyasFiltros);

router.get('*', controllers.notFound);

export default router;