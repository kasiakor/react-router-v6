import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./books">Book List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookList />}></Route>
      </Routes>
    </>
  );
}

export default App;
