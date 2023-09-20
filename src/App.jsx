import { Link, useRoutes } from "react-router-dom";
import Home from "./Home";
//import BookList from "./BookList";
//import Book from "./Book";
//import NewBook from "./NewBook";
import NotFound from "./NotFound";
//import BookLayout from "./BookLayout";

function App() {
  // uses JS objects instead of route elements
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "*", element: <NotFound /> },
  ]);
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
      {element}
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
