import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BookLayout from "./BookLayout";

function App() {
  const location = useLocation();
  console.log(location);
  // // uses JS objects instead of route elements
  // const element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   { path: "*", element: <NotFound /> },
  // ]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : null;
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "active home" : "home";
              }}
            </NavLink>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {location.state}
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
