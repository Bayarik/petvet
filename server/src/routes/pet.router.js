const { Router } = require('express');
const petController = require('../controllers/pet.controller');
// const checkAuth = require('../middlewares/checkAuth');

const petRouter = Router();

petRouter.route('/:id')
  .get(petController.getPet);

module.exports = petRouter;
