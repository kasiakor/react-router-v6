import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import Book from "./Book";

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
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
      </Routes>
    </>
  );
}

export default App;
