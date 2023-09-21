import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_items = {
  w1: {
    title: "Water",
    price: 0.8,
    description: "This is a water bottle - amazing!",
  },
  s1: {
    title: "Soil",
    price: 15.0,
    description: "This is good soil for your plants!",
  },
};

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Object.entries(dummy_items).map(([key, item], index) => (
          <ProductItem item={item} id={key} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
