import { useEffect, useState } from "react";

export type Book = {
  id: number;
  title: string;
  author: string;
};

const BookJsonFetcher = (Book) => {
  const [books, setBooks] = useState<Book[]>([]);

  const getData = async () => {
    const response = await fetch(`./data/books.json`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const localData = await getData();
      setBooks(localData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="border border-amber-300">도서번호</th>
            <th className="border border-amber-300">도서명</th>
            <th className="border border-amber-300">저자명</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border border-amber-300">{book.id}</td>
              <td className="border border-amber-300">{book.title}</td>
              <td className="border border-amber-300">{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookJsonFetcher;
