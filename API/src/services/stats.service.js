const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { startOfYear, endOfYear, getMonth } = require("date-fns");

exports.getSummaryStats = async (userId) => {
  const currentYear = new Date().getFullYear();

  const booksRead = await prisma.userBook.findMany({
    where: {
      userId,
      status: "read",
      finishedAt: {
        gte: new Date(`${currentYear}-01-01`),
        lte: new Date(`${currentYear}-12-31`),
      },
    },
    include: { book: true },
  });

  const totalBooks = booksRead.length;
  const totalPages = booksRead.reduce((sum, item) => sum + (item.pagesRead || 0), 0);
  const mostPages = booksRead.reduce((max, curr) => (curr.book?.pageCount || 0) > max ? (curr.book?.pageCount || 0) : max, 0);
  const longestBook = booksRead.find(book => book.book?.pageCount === mostPages);

  return {
    totalBooks,
    totalPages,
    longestBook: longestBook?.book?.title || null,
  };
};

exports.getMonthlyStats = async (userId) => {
  const currentYear = new Date().getFullYear();

  const books = await prisma.userBook.findMany({
    where: {
      userId,
      finishedAt: {
        gte: new Date(`${currentYear}-01-01`),
        lte: new Date(`${currentYear}-12-31`),
      },
    },
  });

  const monthlyStats = Array(12).fill(null).map(() => ({ books: 0, pages: 0 }));

  books.forEach(book => {
    const month = getMonth(book.finishedAt); // 0 = enero
    monthlyStats[month].books += 1;
    monthlyStats[month].pages += book.pagesRead || 0;
  });

  return monthlyStats;
};

exports.getGenreStats = async (userId) => {
  const userBooks = await prisma.userBook.findMany({
    where: {
      userId,
      status: "read",
    },
    include: {
      book: true,
    },
  });

  const genreMap = {};

  userBooks.forEach(({ book }) => {
    const genres = book?.authors?.split(", ") || ["Unknown"];
    genres.forEach((genre) => {
      genreMap[genre] = (genreMap[genre] || 0) + 1;
    });
  });

  return Object.entries(genreMap).map(([genre, count]) => ({ genre, count }));
};
