import { Router } from 'express';
import { CidadesController } from '../controllers/cidades';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Olá kk');
});

router.get('/cidades', CidadesController.getAllValidations, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);



export { router };