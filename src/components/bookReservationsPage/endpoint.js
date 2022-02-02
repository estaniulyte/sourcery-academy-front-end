export const getBooksData = async () => {
  const response = await fetch(
    "https://estaniulyte.github.io/Data/sourcery-academy-front-end/books.json"
  );

  const data = await response.json();

  return {
    bookList: data.books.bookList,
    bookFilterCategories: data.books.filterCategories,
  };
};
