import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  // returns a function
  // You should call navigate() in a React.useEffect(), not when your component is first rendered.
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Page not found, from state" });
    }, 1000);
  }, []);

  return <div>Not Found</div>;
  //   <Navigate to="/" />;
};

export default NotFound;
