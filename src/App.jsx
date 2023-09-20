import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BookLayout from "./BookLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
