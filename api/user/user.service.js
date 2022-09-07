const User = require('./user.model');
//import User from "./user.model.js";

function getAllUser() {
  return User.find({});
}

function getSingleUser(id) {
  return User.findById(id);
}
function findUserByEmail(email) {
  return User.findOne({ email: email });
}
function createUser(user) {
  return User.create(user);
}
function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true });
}
function deleteUser(id) {
  return User.findByIdAndRemove(id);
}
module.exports = {
  getAllUser,
  getSingleUser,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
