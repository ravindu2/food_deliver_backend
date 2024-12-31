const prisma = require('../models/prismaClient');
const bcrypt = require('bcrypt');

const createUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword }
  });
  return user;
};

module.exports = { createUser };
