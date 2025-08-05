const axios = require("axios");

exports.searchBooks = async (query) => {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10&key=${apiKey}`;

  const response = await axios.get(url);
  const items = response.data.items || [];

  return items.map((item) => {
    const info = item.volumeInfo;
    return {
      googleId: item.id,
      title: info.title || "Untitled",
      authors: info.authors?.join(", ") || "Unknown",
      description: info.description || "",
      thumbnail: info.imageLinks?.thumbnail || "",
      pageCount: info.pageCount || null,
      publishedAt: info.publishedDate || null,
    };
  });
};
