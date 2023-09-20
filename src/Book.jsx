import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div>
      Book {id} {obj.book}
    </div>
  );
};

export default Book;
