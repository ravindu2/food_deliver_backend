const userService = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.createUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser };