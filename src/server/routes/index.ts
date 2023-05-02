import { Router } from 'express';
import { CidadesController } from '../controllers/cidades';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Olá kk');
});

router.post('/cidades', CidadesController.create);

export { router };