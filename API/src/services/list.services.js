const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getLists = async (userId) => {
  return await prisma.list.findMany({
    where: { userId },
    include: { listItems: true },
  });
};

exports.createList = async (userId, title) => {
  return await prisma.list.create({
    data: { userId, title },
  });
};

exports.getListItems = async (listId) => {
  return await prisma.listItem.findMany({
    where: { listId },
    include: {
      userBook: {
        include: { book: true },
      },
    },
  });
};

exports.addItemToList = async (listId, userBookId) => {
  return await prisma.listItem.create({
    data: { listId, userBookId },
  });
};

exports.removeItemFromList = async (itemId) => {
  return await prisma.listItem.delete({
    where: { id: itemId },
  });
};
