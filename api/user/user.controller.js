const bcrypt = require('bcryptjs');

const {
  getAllUser,
  getSingleUser,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.service');
//import { getAllUser, getSingleUser } from "./user.service.js";

async function getAllUserHandler(req, res) {
  try {
    const users = await getAllUser();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getSingleUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getSingleUser(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const profile = user.profile;

    return res.json(profile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function createUserHandler(req, res) {
  const userData = req.body;

  const salt = await bcrypt.genSalt(10);
  userData.password = await bcrypt.hash(userData.password, salt);

  try {
    const user = await createUser(userData);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function updateUserHandler(req, res) {
  const { id } = req.params;
  const userData = req.body;

  const salt = await bcrypt.genSalt(10);
  userData.password = await bcrypt.hash(userData.password, salt);

  try {
    const user = await updateUser(id, userData);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

function deleteUserHandler(req, res) {}

module.exports = {
  getAllUserHandler,
  getSingleUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
