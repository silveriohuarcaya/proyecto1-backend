const { Router } = require('express');
//import { Router } from "express";

const {
  getAllUserHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} = require('./user.controller');

//import { getAllUserHandler, getSingleUserHandler } from "./user.controller.js";

const router = Router();

router.get('/', getAllUserHandler);
router.get('/:id/', getSingleUserHandler);
router.post('/', createUserHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
//export default router;
