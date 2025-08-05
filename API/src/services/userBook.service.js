const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUserBooks = async (userId) => {
  return await prisma.userBook.findMany({
    where: { userId },
    include: { book: true },
  });
};

exports.saveUserBook = async (userId, bookData) => {
  const {
    googleId,
    title,
    authors,
    description,
    thumbnail,
    pageCount,
    publishedAt,
    status,
    rating,
    notes,
  } = bookData;

  let book = await prisma.book.findUnique({ where: { googleId } });

  if (!book) {
    book = await prisma.book.create({
      data: {
        googleId,
        title,
        authors,
        description,
        thumbnail,
        pageCount,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
      },
    });
  }

  return await prisma.userBook.create({
    data: {
      userId,
      bookId: book.id,
      status,
      rating,
      notes,
    },
  });
};

exports.updateUserBook = async (id, data) => {
  return await prisma.userBook.update({
    where: { id },
    data,
  });
};

exports.deleteUserBook = async (id) => {
  return await prisma.userBook.delete({ where: { id } });
};
