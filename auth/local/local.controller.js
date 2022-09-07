const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../../api/user/user.service');

async function loginUserHandler(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'User or password incorrect' });
    }
    isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Password or user incorrect' });
    }
    const token = jwt.sign(
      { email: email }, // payload     // ... user,
      'EL_S#CR3TO_DE_AM0R', // secret      // process.env.JWT_SECRET,
      { expiresIn: '1h' } // options -> expires in hours
    );
    // return res.status(200).json(user);
    return res.status(200).json({ token, profile: user.profile });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function changePasswordHandler(req, res) {}

async function forgotPasswordHandler(req, res) {}

async function veryfyAccountHandler(req, res) {}

module.exports = {
  loginUserHandler,
  changePasswordHandler,
  forgotPasswordHandler,
  veryfyAccountHandler,
};
