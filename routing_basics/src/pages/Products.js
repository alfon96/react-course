import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>My Products Page</h1>
      <p>
        Go <Link to="/">home</Link>
      </p>
    </>
  );
};

export default ProductsPage;
