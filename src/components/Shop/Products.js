import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_data = [
  {
    id: 1,
    name: "my first book",
    price: 12,
    describe: "This is a first product - amazing!",
  },
  {
    id: 2,
    name: "my second book",
    price: 14,
    describe: "This is a second product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.describe}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
