const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generatetoken");

const prisma = new PrismaClient();

exports.register = async ({ name, email, password }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw { status: 400, message: "Email already registered" };

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const token = generateToken(user.id);
  return { user: { id: user.id, name: user.name, email: user.email }, token };
};

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { status: 404, message: "User not found" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw { status: 401, message: "Invalid credentials" };

  const token = generateToken(user.id);
  return { user: { id: user.id, name: user.name, email: user.email }, token };
};
