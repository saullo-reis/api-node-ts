"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const cidades_1 = require("../controllers/cidades");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.send('Olá kk');
});
router.get('/cidades', cidades_1.CidadesController.getAllValidations, cidades_1.CidadesController.getAll);
router.get('/cidades/:id', cidades_1.CidadesController.getByIdValidation, cidades_1.CidadesController.getById);
router.post('/cidades', cidades_1.CidadesController.createValidation, cidades_1.CidadesController.create);
router.put('/cidades/:id', cidades_1.CidadesController.updateByIdValidation, cidades_1.CidadesController.updateById);
router.delete('/cidades/:id', cidades_1.CidadesController.deleteByIdValidation, cidades_1.CidadesController.deleteById);
